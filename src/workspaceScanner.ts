// ワークスペーススキャン・インデックス管理モジュール
import * as fs from "fs";
import * as path from "path";

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
    if (macros.length > 0) {
      const existing = this.ksFileIndices.get(relativePath) ?? { labels: [], macros: [] };
      existing.macros.push(...macros);
      this.ksFileIndices.set(relativePath, existing);
    }
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
    const lines = content.split("\n");

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
    }

    this.ksFileIndices.set(relativePath, { labels, macros, charas });
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

      // data/scenario/ 配下の .ks ファイルのみ対象
      if (relativePath.startsWith("scenario") && filePath.endsWith(".ks")) {
        this.indexKsContent(relativePath, content);
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
      return content.split("\n").some((line) => {
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
      charas.push(...index.charas);
    }
    return charas;
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
   * 全 .ks ファイルからラベル参照箇所を検索する
   * 以下の記法をすべてカバーする:
   *   target="*labelName"  ← クォートあり・アスタリスクあり
   *   target=*labelName    ← クォートなし・アスタリスクあり
   *   target="labelName"   ← クォートあり・アスタリスクなし
   *   target=labelName     ← クォートなし・アスタリスクなし
   */
  findLabelReferences(labelName: string): FileReference[] {
    if (!this.initialized) return [];

    const results: FileReference[] = [];
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return results;

    const ksFiles = this.findKsFiles(scenarioPath);
    const escaped = this.escapeRegExp(labelName);
    // target= の後、クォート有無・アスタリスク有無を問わずラベル名にマッチ
    const regex = new RegExp(
      `target\\s*=\\s*["']?\\*?(${escaped})(?=["'\\s\\]\\r\\n]|$)`,
      "g"
    );

    for (const filePath of ksFiles) {
      try {
        const relativePath = path.relative(this.dataPath, filePath);
        // メモリキャッシュ優先（未保存の編集内容を反映するため）
        const content = this.ksFileContents.get(relativePath) ?? fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");

        for (let i = 0; i < lines.length; i++) {
          // コメント行はスキップ（コメント内の参照を有効な参照として数えない）
          if (lines[i].trimStart().startsWith(";")) continue;
          let match;
          regex.lastIndex = 0;
          while ((match = regex.exec(lines[i])) !== null) {
            // キャプチャグループ1がラベル名の開始位置
            const nameStart = match.index + match[0].length - match[1].length;
            // *が直前にあればアスタリスクも含めた範囲を返す
            const hasStar = lines[i][nameStart - 1] === "*";
            const startChar = hasStar ? nameStart - 1 : nameStart;
            results.push({
              file: relativePath,
              line: i,
              startChar,
              endChar: startChar + labelName.length + (hasStar ? 1 : 0),
            });
          }
        }
      } catch {
        // 読み取りエラーは無視
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
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return results;

    const ksFiles = this.findKsFiles(scenarioPath);
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

    for (const filePath of ksFiles) {
      try {
        const relativePath = path.relative(this.dataPath, filePath);
        // メモリキャッシュ優先（未保存の編集内容を反映するため）
        const content = this.ksFileContents.get(relativePath) ?? fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          // コメント行・定義行は除外
          if (line.trimStart().startsWith(";")) continue;
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
      } catch {
        // 読み取りエラーは無視
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
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return results;

    const ksFiles = this.findKsFiles(scenarioPath);
    const escaped = this.escapeRegExp(charaName);
    // chara_new 以外の chara_* タグ行にマッチするか判定
    const charaTagRegex = /\[chara_(?!new\b)\w+/;
    // name="charaName" または name=charaName にマッチしキャラ名をキャプチャ
    const nameRegex = new RegExp(`\\bname\\s*=\\s*"?(${escaped})"?`, "g");

    for (const filePath of ksFiles) {
      try {
        const relativePath = path.relative(this.dataPath, filePath);
        const content = this.ksFileContents.get(relativePath) ?? fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.trimStart().startsWith(";")) continue;
          if (!charaTagRegex.test(line)) continue;

          nameRegex.lastIndex = 0;
          let match;
          while ((match = nameRegex.exec(line)) !== null) {
            // キャプチャグループ1がキャラ名の開始位置
            const nameStart = match.index + match[0].length - match[1].length;
            results.push({
              file: relativePath,
              line: i,
              startChar: nameStart,
              endChar: nameStart + charaName.length,
            });
          }
        }
      } catch {
        // 読み取りエラーは無視
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
}
