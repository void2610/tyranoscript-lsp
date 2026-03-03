// ワークスペーススキャン・インデックス管理モジュール
import * as fs from "fs";
import * as path from "path";

const TF_DEFINITION_PATTERN =
  "(?:\\+\\+|--)\\s*tf\\.([A-Za-z_]\\w*)\\b|\\btf\\.([A-Za-z_]\\w*)\\b\\s*(?:[+\\-*/%]?=(?!=)|\\+\\+|--)";

/** プロジェクト内のラベル定義 */
export interface LabelDefinition {
  name: string; // ラベル名（*の後の部分）
  file: string; // 定義元ファイルの相対パス
  line: number;
}

/** プロジェクト内のマクロ定義 */
export interface MacroDefinition {
  name: string;
  file: string;
  line: number;
  /** [macro] 直前のコメント行から抽出した説明文 */
  description: string;
}

/** プロジェクト内のキャラクター定義（[chara_new name="xxx"]） */
export interface CharaDefinition {
  name: string;
  file: string;
  line: number;
}

/** プロジェクト内のキャラクター表情定義（[chara_face name="xxx" face="yyy"]） */
export interface FaceDefinition {
  charaName: string;
  faceName: string;
  file: string;
  line: number;
}

/** プロジェクト内の名前付き要素定義（[ptext name="xxx"] / [image name="xxx"]） */
export interface NamedElementDefinition {
  elementName: string;
  tagName: "ptext" | "image";
  file: string;
  line: number;
}

/** プロジェクト内の tf 変数定義 */
export interface TfDefinition {
  name: string;
  file: string;
  line: number;
}

/** 参照検索結果 */
export interface FileReference {
  file: string; // data/ からの相対パス
  line: number; // 0ベース行番号
  startChar: number;
  endChar: number;
}

/** アセットカテゴリ */
export type AssetCategory =
  | "bgimage"
  | "fgimage"
  | "image"
  | "bgm"
  | "sound"
  | "video"
  | "scenario"
  | "others";

/** タグ名 → アセットディレクトリの対応マップ */
export const TAG_STORAGE_MAPPING: Map<string, AssetCategory> = new Map([
  ["bg", "bgimage"],
  ["bg2", "bgimage"],
  ["chara_new", "fgimage"],
  ["chara_face", "fgimage"],
  ["chara_mod", "fgimage"],
  ["chara_show", "fgimage"],
  ["chara_layer", "fgimage"],
  ["image", "fgimage"], // [image]タグはdata/fgimage/を参照する
  ["cursor", "image"],
  ["graph", "image"],
  ["mask", "image"],
  ["playbgm", "bgm"],
  ["fadeinbgm", "bgm"],
  ["xchgbgm", "bgm"],
  ["playse", "sound"],
  ["fadeinse", "sound"],
  ["movie", "video"],
  ["bgmovie", "video"],
  ["layer_video", "video"],
  ["jump", "scenario"],
  ["call", "scenario"],
  ["link", "scenario"],
  ["glink", "scenario"],
  ["clickable", "scenario"],
  ["button", "scenario"],
]);

/** アセットキャッシュエントリ */
interface AssetCacheEntry {
  files: string[];
  timestamp: number;
}

/** KSファイルごとのインデックス */
interface KsFileIndex {
  labels: LabelDefinition[];
  macros: MacroDefinition[];
  charas: CharaDefinition[];
  faces: FaceDefinition[];
  namedElements: NamedElementDefinition[];
  tfDefinitions: TfDefinition[];
}

/** キャッシュTTL（ミリ秒） */
const CACHE_TTL = 30_000;

/**
 * ワークスペーススキャナー
 * プロジェクト内のアセット・ラベル・マクロを走査しインデックスを管理する
 */
export class WorkspaceScanner {
  private rootPath: string = "";
  private dataPath: string = "";
  private initialized: boolean = false;

  // アセットファイルキャッシュ（カテゴリ別）
  private assetCache: Map<AssetCategory, AssetCacheEntry> = new Map();

  // KSファイルインデックス（ファイルパスをキーに）
  private ksFileIndices: Map<string, KsFileIndex> = new Map();

  // KSファイルのコンテンツキャッシュ（relativePath をキーに）
  // updateFile で受け取ったメモリ上の内容を保持し、ディスク未保存でも参照検索に使う
  private ksFileContents: Map<string, string> = new Map();

  /**
   * ワークスペースルートを設定しdataディレクトリの存在を確認する
   */
  initialize(rootUri: string): boolean {
    try {
      // file:// URI をファイルパスに変換
      const url = new URL(rootUri);
      this.rootPath = decodeURIComponent(url.pathname);
      this.dataPath = path.join(this.rootPath, "data");

      if (fs.existsSync(this.dataPath)) {
        this.initialized = true;
        return true;
      }
    } catch {
      // URIパースエラー時は初期化失敗
    }
    this.initialized = false;
    return false;
  }

  /**
   * アセットスキャンとKSファイルスキャンを並行実行する
   */
  async scanAll(): Promise<void> {
    if (!this.initialized) return;
    await Promise.all([this.scanAssets(), this.scanKsFiles()]);
  }

  /**
   * 全アセットカテゴリのディレクトリを走査する
   */
  private async scanAssets(): Promise<void> {
    const categories: AssetCategory[] = [
      "bgimage",
      "fgimage",
      "image",
      "bgm",
      "sound",
      "video",
      "scenario",
      "others",
    ];
    for (const category of categories) {
      this.scanAssetCategory(category);
    }
  }

  /**
   * 指定カテゴリのアセットディレクトリを走査しキャッシュに格納する
   */
  private scanAssetCategory(category: AssetCategory): void {
    const dirPath = path.join(this.dataPath, category);
    try {
      if (!fs.existsSync(dirPath)) {
        this.assetCache.set(category, { files: [], timestamp: Date.now() });
        return;
      }
      const files = this.readDirRecursive(dirPath, dirPath);
      this.assetCache.set(category, { files, timestamp: Date.now() });
    } catch {
      this.assetCache.set(category, { files: [], timestamp: Date.now() });
    }
  }

  /**
   * ディレクトリを再帰的に走査しファイルの相対パスリストを返す
   */
  private readDirRecursive(dirPath: string, basePath: string): string[] {
    const results: string[] = [];
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          results.push(...this.readDirRecursive(fullPath, basePath));
        } else {
          // ベースパスからの相対パスを格納
          results.push(path.relative(basePath, fullPath));
        }
      }
    } catch {
      // 読み取りエラーは無視
    }
    return results;
  }

  /**
   * data/scenario/ 配下の .ks ファイルを全件読み込み、ラベルとマクロを抽出する
   */
  private async scanKsFiles(): Promise<void> {
    const scenarioPath = path.join(this.dataPath, "scenario");
    const pluginPath = path.join(this.dataPath, "others", "plugin");

    this.ksFileIndices.clear();

    // scenario/ の .ks をスキャン
    if (fs.existsSync(scenarioPath)) {
      for (const filePath of this.findKsFiles(scenarioPath)) {
        try {
          const content = fs.readFileSync(filePath, "utf-8");
          this.indexKsContent(path.relative(this.dataPath, filePath), content);
        } catch {
          // 読み取りエラーは無視
        }
      }
    }

    // プラグインフォルダの .ks と .js をスキャン
    if (fs.existsSync(pluginPath)) {
      for (const filePath of this.findKsFiles(pluginPath)) {
        try {
          const content = fs.readFileSync(filePath, "utf-8");
          this.indexKsContent(path.relative(this.dataPath, filePath), content);
        } catch {
          // 読み取りエラーは無視
        }
      }
      for (const filePath of this.findFilesByExt(pluginPath, ".js")) {
        try {
          const content = fs.readFileSync(filePath, "utf-8");
          this.indexPluginJs(path.relative(this.dataPath, filePath), content);
        } catch {
          // 読み取りエラーは無視
        }
      }
    }
  }

  /**
   * プラグイン .js から TYRANO.kag.ftag.master_tag.XXX パターンを検出してマクロとして登録する
   */
  private indexPluginJs(relativePath: string, content: string): void {
    const pattern = /TYRANO\.kag\.ftag\.master_tag\.(\w+)\s*=/g;
    const lines = content.split("\n");
    const macros: MacroDefinition[] = [];
    const tfDefinitions = this.collectTfDefinitions(relativePath, lines, "js");
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const tagName = match[1];
      const lineNum = content.slice(0, match.index).split("\n").length - 1;
      // 直前の行にあるコメントを説明文として使う
      const prevLine = lines[lineNum - 1]?.match(/^\s*\/\/\s?(.*)/);
      macros.push({
        name: tagName,
        file: relativePath,
        line: lineNum,
        description: prevLine ? prevLine[1] : `プラグインタグ (${relativePath})`,
      });
    }
    const existing = this.ksFileIndices.get(relativePath) ?? {
      labels: [],
      macros: [],
      charas: [],
      faces: [],
      namedElements: [],
      tfDefinitions: [],
    };
    if (macros.length > 0) {
      existing.macros.push(...macros);
    }
    existing.tfDefinitions = tfDefinitions;
    this.ksFileIndices.set(relativePath, existing);
    this.ksFileContents.set(relativePath, content);
  }

  /**
   * 指定ディレクトリ配下の指定拡張子のファイルを再帰的に検索する
   */
  private findFilesByExt(dirPath: string, ext: string): string[] {
    const results: string[] = [];
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          results.push(...this.findFilesByExt(fullPath, ext));
        } else if (entry.name.endsWith(ext)) {
          results.push(fullPath);
        }
      }
    } catch {
      // 読み取りエラーは無視
    }
    return results;
  }

  /**
   * 指定ディレクトリ配下の .ks ファイルを再帰的に検索する
   */
  private findKsFiles(dirPath: string): string[] {
    const results: string[] = [];
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          results.push(...this.findKsFiles(fullPath));
        } else if (entry.name.endsWith(".ks")) {
          results.push(fullPath);
        }
      }
    } catch {
      // 読み取りエラーは無視
    }
    return results;
  }

  /**
   * KSファイルの内容からラベルとマクロを正規表現で抽出しインデックスに格納する
   */
  private indexKsContent(relativePath: string, content: string): void {
    const labels: LabelDefinition[] = [];
    const macros: MacroDefinition[] = [];
    const charas: CharaDefinition[] = [];
    const faces: FaceDefinition[] = [];
    const namedElements: NamedElementDefinition[] = [];
    const lines = content.split("\n");
    const tfDefinitions = this.collectTfDefinitions(relativePath, lines, "ks");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // ラベル検出: 行頭の *xxx
      const labelMatch = line.match(/^\*(\w+)/);
      if (labelMatch) {
        labels.push({
          name: labelMatch[1],
          file: relativePath,
          line: i,
        });
      }

      // マクロ検出: [macro name="xxx"]
      const macroMatch = line.match(/\[macro\s+name\s*=\s*"(\w+)"\s*\]/i);
      if (macroMatch) {
        // 直前の連続するコメント行を説明文として収集
        const commentLines: string[] = [];
        for (let j = i - 1; j >= 0; j--) {
          const commentMatch = lines[j].match(/^;\s?(.*)/);
          if (commentMatch) {
            commentLines.unshift(commentMatch[1]);
          } else {
            break;
          }
        }
        macros.push({
          name: macroMatch[1],
          file: relativePath,
          line: i,
          description: commentLines.join("\n"),
        });
      }

      // キャラクター定義検出: [chara_new ... name="xxx" ...]
      const charaMatch = line.match(/\[chara_new\b[^\]]*\bname\s*=\s*"([^"]+)"/i);
      if (charaMatch) {
        charas.push({
          name: charaMatch[1],
          file: relativePath,
          line: i,
        });
      }

      // 表情定義検出: [chara_face ... name="X" ... face="Y" ...]（属性順序不問）
      const charaFaceTagMatch = line.match(/\[chara_face\b([^\]]*)\]/i);
      if (charaFaceTagMatch) {
        const attrs = charaFaceTagMatch[1];
        const nameM = attrs.match(/\bname\s*=\s*"([^"]+)"/i);
        const faceM = attrs.match(/\bface\s*=\s*"([^"]+)"/i);
        if (nameM && faceM) {
          faces.push({ charaName: nameM[1], faceName: faceM[1], file: relativePath, line: i });
        }
      }

      // 名前付き要素定義検出: [ptext name="xxx"] / [image name="xxx"]
      const ptextNameMatch = line.match(/\[ptext\b[^\]]*\bname\s*=\s*"([^"]+)"/i);
      if (ptextNameMatch) {
        namedElements.push({ elementName: ptextNameMatch[1], tagName: "ptext", file: relativePath, line: i });
      }
      const imageNameMatch = line.match(/\[image\b[^\]]*\bname\s*=\s*"([^"]+)"/i);
      if (imageNameMatch) {
        namedElements.push({ elementName: imageNameMatch[1], tagName: "image", file: relativePath, line: i });
      }
    }

    this.ksFileIndices.set(relativePath, {
      labels,
      macros,
      charas,
      faces,
      namedElements,
      tfDefinitions,
    });
    // メモリ上のコンテンツを保持（参照検索でディスク未保存の編集内容を使うため）
    this.ksFileContents.set(relativePath, content);
  }

  /**
   * 単一ファイルのインクリメンタル更新（編集中ファイルのインデックスを差し替え）
   */
  updateFile(uri: string, content: string): void {
    if (!this.initialized) return;

    try {
      const url = new URL(uri);
      const filePath = decodeURIComponent(url.pathname);

      // dataディレクトリからの相対パスを算出
      const relativePath = path.relative(this.dataPath, filePath);

      // data/scenario/ 配下の .ks と plugin 配下の .ks/.js を対象
      if (relativePath.startsWith("scenario") && filePath.endsWith(".ks")) {
        this.indexKsContent(relativePath, content);
        return;
      }

      if (relativePath.startsWith(path.join("others", "plugin"))) {
        if (filePath.endsWith(".ks")) {
          this.indexKsContent(relativePath, content);
          return;
        }
        if (filePath.endsWith(".js")) {
          this.indexPluginJs(relativePath, content);
        }
      }
    } catch {
      // URIパースエラーは無視
    }
  }

  /**
   * 指定ファイルに動的ターゲット参照（target=&var / target=%var）が含まれるか判定する
   * 含まれる場合、そのファイルのラベルは動的に参照される可能性があるため未使用警告をスキップする
   */
  hasDynamicTargetReference(fileUri: string): boolean {
    if (!this.initialized) return false;
    try {
      const url = new URL(fileUri);
      const filePath = decodeURIComponent(url.pathname);
      const content = fs.readFileSync(filePath, "utf-8");
      return content.split("\n").some((line: string) => {
        if (line.trimStart().startsWith(";")) return false;
        return /target\s*=\s*[&%]/.test(line);
      });
    } catch {
      return false;
    }
  }

  /**
   * ワークスペース内の全 .ks ファイルを {uri, content} のリストで返す
   * スキャン未完了時は空配列を返す
   */
  getAllKsFiles(): Array<{ uri: string; content: string }> {
    if (!this.initialized) return [];
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return [];

    const results: Array<{ uri: string; content: string }> = [];
    const ksFiles = this.findKsFiles(scenarioPath);
    for (const filePath of ksFiles) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const relativePath = path.relative(this.dataPath, filePath);
        results.push({ uri: this.resolveFilePath(relativePath), content });
      } catch {
        // 読み取りエラーは無視
      }
    }
    return results;
  }

  /**
   * カテゴリディレクトリを基準にしたファイルパスを解決し、実在するか確認する
   * キャッシュ外のパス（../を含む相対パスなど）に対して直接 fs.existsSync で確認する
   */
  assetFileExists(category: AssetCategory, value: string): boolean {
    if (!this.initialized) return true; // スキャン未完了時は誤警告を避ける
    const categoryDir = path.join(this.dataPath, category);
    const resolved = path.resolve(categoryDir, value);
    return fs.existsSync(resolved);
  }

  /**
   * 指定カテゴリのアセットファイル一覧を返す
   * キャッシュTTL超過時は自動再スキャンする
   */
  getAssetsForCategory(category: AssetCategory): string[] {
    if (!this.initialized) return [];

    const cached = this.assetCache.get(category);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.files;
    }

    // キャッシュ期限切れ: 再スキャン
    this.scanAssetCategory(category);
    return this.assetCache.get(category)?.files ?? [];
  }

  /**
   * 全ラベル定義を返す
   */
  getLabels(): LabelDefinition[] {
    const labels: LabelDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      labels.push(...index.labels);
    }
    return labels;
  }

  /**
   * 全キャラクター定義を返す
   */
  getCharas(): CharaDefinition[] {
    const charas: CharaDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      if (index.charas) charas.push(...index.charas);
    }
    return charas;
  }

  /**
   * 全キャラクター表情定義を返す
   */
  getFaces(): FaceDefinition[] {
    const faces: FaceDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      if (index.faces) faces.push(...index.faces);
    }
    return faces;
  }

  /**
   * 全名前付き要素定義（ptext / image）を返す
   */
  getNamedElements(): NamedElementDefinition[] {
    const elements: NamedElementDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      if (index.namedElements) elements.push(...index.namedElements);
    }
    return elements;
  }

  /**
   * 全 tf 変数定義を返す
   */
  getTfDefinitions(): TfDefinition[] {
    const definitions: TfDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      if (index.tfDefinitions) definitions.push(...index.tfDefinitions);
    }
    return definitions;
  }

  /**
   * 全マクロ定義を返す
   */
  getMacros(): MacroDefinition[] {
    const macros: MacroDefinition[] = [];
    for (const index of this.ksFileIndices.values()) {
      macros.push(...index.macros);
    }
    return macros;
  }

  /**
   * シナリオファイル一覧を返す（.ks拡張子）
   */
  getScenarioFiles(): string[] {
    return this.getAssetsForCategory("scenario");
  }

  /**
   * 初期化済みかどうかを返す
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * 全インデックス済みファイルからラベル参照箇所を検索する
   * target= と nextOrderWithLabel() の両方をカバーする
   */
  findLabelReferences(labelName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const escaped = this.escapeRegExp(labelName);
    const targetRegex = new RegExp(
      `target\\s*=\\s*["']?\\*?(${escaped})(?=["'\\s\\]\\r\\n]|$)`,
      "g"
    );
    const jsLabelRegex = new RegExp(
      `nextOrderWithLabel\\s*\\(\\s*["'](\\*?${escaped})["']`,
      "g"
    );

    for (const relativePath of this.getSearchableFiles()) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (this.isCommentLine(relativePath, line)) continue;

        let match;
        targetRegex.lastIndex = 0;
        while ((match = targetRegex.exec(line)) !== null) {
          const nameStart = match.index + match[0].length - match[1].length;
          const hasStar = line[nameStart - 1] === "*";
          const startChar = hasStar ? nameStart - 1 : nameStart;
          results.push({
            file: relativePath,
            line: i,
            startChar,
            endChar: startChar + labelName.length + (hasStar ? 1 : 0),
          });
        }

        jsLabelRegex.lastIndex = 0;
        while ((match = jsLabelRegex.exec(line)) !== null) {
          const rawLabel = match[1];
          const startChar = match.index + match[0].length - rawLabel.length;
          results.push({
            file: relativePath,
            line: i,
            startChar,
            endChar: startChar + rawLabel.length,
          });
        }
      }
    }
    return results;
  }

  /**
   * 全 .ks ファイルからマクロの使用箇所を検索する
   * [macroName ...] または @macroName 形式にマッチし、定義行 [macro name="..."] は除外する
   */
  findMacroReferences(macroName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    // [macroName で始まるパターン（タグ呼び出し）
    const bracketRegex = new RegExp(
      `\\[${this.escapeRegExp(macroName)}(?=[\\s\\]]|$)`,
      "g"
    );
    // @macroName で始まるパターン（@記法）
    const atRegex = new RegExp(
      `^@${this.escapeRegExp(macroName)}(?=[\\s]|$)`,
      "g"
    );
    // マクロ定義行のパターン（除外用）
    const defRegex = new RegExp(
      `\\[macro\\s+name\\s*=\\s*"${this.escapeRegExp(macroName)}"\\s*\\]`,
      "i"
    );

    for (const relativePath of this.getSearchableFiles([".ks"])) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // コメント行・定義行は除外
        if (this.isCommentLine(relativePath, line)) continue;
        if (defRegex.test(line)) continue;

        // [macroName パターン
        bracketRegex.lastIndex = 0;
        let match;
        while ((match = bracketRegex.exec(line)) !== null) {
          const start = match.index + 1; // "[" の次
          results.push({
            file: relativePath,
            line: i,
            startChar: start,
            endChar: start + macroName.length,
          });
        }

        // @macroName パターン
        atRegex.lastIndex = 0;
        while ((match = atRegex.exec(line)) !== null) {
          const start = match.index + 1; // "@" の次
          results.push({
            file: relativePath,
            line: i,
            startChar: start,
            endChar: start + macroName.length,
          });
        }
      }
    }
    return results;
  }

  /**
   * 全 .ks ファイルからキャラクター参照箇所を検索する
   * chara_new 以外の chara_* タグで name="charaName" にマッチする行を返す
   */
  findCharaReferences(charaName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const escaped = this.escapeRegExp(charaName);
    // chara_new 以外の chara_* タグ行にマッチするか判定
    const charaTagRegex = /\[chara_(?!new\b)\w+/;
    // name="charaName" または name=charaName にマッチしキャラ名をキャプチャ
    const nameRegex = new RegExp(`\\bname\\s*=\\s*"?(${escaped})"?`, "g");

    for (const relativePath of this.getSearchableFiles([".ks"])) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (this.isCommentLine(relativePath, line)) continue;
        if (!charaTagRegex.test(line)) continue;

        nameRegex.lastIndex = 0;
        let match;
        while ((match = nameRegex.exec(line)) !== null) {
          const nameStart = match.index + match[0].length - match[1].length;
          results.push({
            file: relativePath,
            line: i,
            startChar: nameStart,
            endChar: nameStart + charaName.length,
          });
        }
      }
    }
    return results;
  }

  /**
   * 全 .ks ファイルからキャラクター表情の参照箇所を検索する
   * chara_face 以外の chara_* タグで name="charaName" かつ face="faceName" にマッチする行を返す
   */
  findFaceReferences(charaName: string, faceName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const escapedCharaName = this.escapeRegExp(charaName);
    const escapedFaceName = this.escapeRegExp(faceName);
    // chara_face 以外の chara_* タグ行かを確認
    const charaTagRegex = /\[chara_(?!face\b)\w+/;
    // 同一行に name="charaName" が存在するか確認
    const nameCheckRegex = new RegExp(`\\bname\\s*=\\s*"${escapedCharaName}"`, "i");
    // face="faceName" の値位置をキャプチャ
    const faceValueRegex = new RegExp(`\\bface\\s*=\\s*"(${escapedFaceName})"`, "g");

    for (const relativePath of this.getSearchableFiles([".ks"])) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (this.isCommentLine(relativePath, line)) continue;
        if (!charaTagRegex.test(line)) continue;
        if (!nameCheckRegex.test(line)) continue;

        faceValueRegex.lastIndex = 0;
        let match;
        while ((match = faceValueRegex.exec(line)) !== null) {
          const nameStart = match.index + match[0].length - match[1].length;
          results.push({
            file: relativePath,
            line: i,
            startChar: nameStart,
            endChar: nameStart + faceName.length,
          });
        }
      }
    }
    return results;
  }

  /**
   * 全 .ks ファイルから名前付き要素（ptext/image）の参照箇所を検索する
   * ptext="elementName" または use="elementName" にマッチする行を返す（定義行を除く）
   */
  findNamedElementReferences(elementName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const escaped = this.escapeRegExp(elementName);
    // 定義行を除外: [ptext name="xxx"] または [image name="xxx"]
    const defRegex = new RegExp(`\\[(?:ptext|image)\\b[^\\]]*\\bname\\s*=\\s*"${escaped}"`, "i");
    // 参照パターン: ptext="xxx" または use="xxx"
    const ptextRegex = new RegExp(`\\bptext\\s*=\\s*"(${escaped})"`, "g");
    const useRegex   = new RegExp(`\\buse\\s*=\\s*"(${escaped})"`, "g");

    for (const relativePath of this.getSearchableFiles([".ks"])) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (this.isCommentLine(relativePath, line)) continue;
        if (defRegex.test(line)) continue; // 定義行はスキップ

        for (const regex of [ptextRegex, useRegex]) {
          regex.lastIndex = 0;
          let match;
          while ((match = regex.exec(line)) !== null) {
            const nameStart = match.index + match[0].length - match[1].length;
            results.push({
              file: relativePath,
              line: i,
              startChar: nameStart,
              endChar: nameStart + elementName.length,
            });
          }
        }
      }
    }
    return results;
  }

  /**
   * 全インデックス済みファイルから tf 変数の参照箇所を検索する
   */
  findTfReferences(tfName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const regex = new RegExp(`\\btf\\.(${this.escapeRegExp(tfName)})\\b`, "g");

    for (const relativePath of this.getSearchableFiles()) {
      const content = this.getIndexedFileContent(relativePath);
      if (content === null) continue;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (this.isCommentLine(relativePath, line)) continue;

        let match;
        regex.lastIndex = 0;
        while ((match = regex.exec(line)) !== null) {
          const startChar = match.index;
          results.push({
            file: relativePath,
            line: i,
            startChar,
            endChar: startChar + 3 + tfName.length,
          });
        }
      }
    }

    return results;
  }

  /**
   * data/ からの相対パスを file:// URI に変換する
   */
  resolveFilePath(relativePath: string): string {
    const absPath = path.join(this.dataPath, relativePath);
    return `file://${encodeURI(absPath)}`;
  }

  /**
   * 正規表現の特殊文字をエスケープする
   */
  private escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /**
   * tf 変数の代入行を定義として抽出する
   */
  private collectTfDefinitions(
    relativePath: string,
    lines: string[],
    fileType: "ks" | "js"
  ): TfDefinition[] {
    const definitions: TfDefinition[] = [];
    const seen = new Set<string>();
    const regex = new RegExp(TF_DEFINITION_PATTERN, "g");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (this.isCommentLineByType(fileType, line)) continue;

      let match;
      regex.lastIndex = 0;
      while ((match = regex.exec(line)) !== null) {
        const name = match[1] ?? match[2];
        if (!name || seen.has(name)) continue;
        seen.add(name);
        definitions.push({ name, file: relativePath, line: i });
      }
    }

    return definitions;
  }

  /**
   * インデックス済みファイルの一覧を返す
   */
  private getSearchableFiles(extensions?: string[]): string[] {
    const files = new Set<string>(this.ksFileContents.keys());
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (fs.existsSync(scenarioPath)) {
      for (const filePath of this.findKsFiles(scenarioPath)) {
        files.add(path.relative(this.dataPath, filePath));
      }
    }

    const pluginPath = path.join(this.dataPath, "others", "plugin");
    if (fs.existsSync(pluginPath)) {
      for (const filePath of this.findKsFiles(pluginPath)) {
        files.add(path.relative(this.dataPath, filePath));
      }
      for (const filePath of this.findFilesByExt(pluginPath, ".js")) {
        files.add(path.relative(this.dataPath, filePath));
      }
    }

    const fileList = [...files];
    if (!extensions || extensions.length === 0) return fileList;
    return fileList.filter((file) => extensions.some((ext) => file.endsWith(ext)));
  }

  /**
   * インデックス済みファイルの内容を返す
   */
  private getIndexedFileContent(relativePath: string): string | null {
    const cached = this.ksFileContents.get(relativePath);
    if (cached !== undefined) return cached;

    try {
      return fs.readFileSync(path.join(this.dataPath, relativePath), "utf-8");
    } catch {
      return null;
    }
  }

  /**
   * ファイル種別に応じたコメント行かを判定する
   */
  private isCommentLine(relativePath: string, line: string): boolean {
    return this.isCommentLineByType(relativePath.endsWith(".js") ? "js" : "ks", line);
  }

  private isCommentLineByType(fileType: "ks" | "js", line: string): boolean {
    const trimmed = line.trimStart();
    return fileType === "js" ? trimmed.startsWith("//") : trimmed.startsWith(";");
  }
}
