// TyranoScript LSPサーバー - 補完・ホバードキュメント機能を提供
import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentPositionParams,
  CompletionItem,
  CompletionItemKind,
  Hover,
  MarkupKind,
  TextDocumentSyncKind,
  InsertTextFormat,
  DefinitionParams,
  ReferenceParams,
  Location,
  Range,
  Position,
  Diagnostic,
  DiagnosticSeverity,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { TAG_DATABASE, TAG_NAMES, TagDefinition } from "./tagDatabase";
import {
  WorkspaceScanner,
  TAG_STORAGE_MAPPING,
  AssetCategory,
  FileReference,
  CharaDefinition,
} from "./workspaceScanner";

/**
 * storage 以外のファイル参照パラメータ → アセットカテゴリ のマッピング
 * タグ横断で同じカテゴリに属するパラメータを一括チェックする
 */
const PARAM_FILE_MAPPING: [string, AssetCategory][] = [
  ["graphic",  "image"],
  ["enterimg", "image"],
  ["leaveimg", "image"],
  ["clickimg", "image"],
];

// stdio接続でLSPサーバーを作成
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
const scanner = new WorkspaceScanner();

connection.onInitialize((params: InitializeParams): InitializeResult => {
  // ワークスペースルートを取得しスキャナーを初期化
  const rootUri = params.rootUri ?? params.workspaceFolders?.[0]?.uri;
  if (rootUri && scanner.initialize(rootUri)) {
    // スキャン完了後に全 .ks ファイルを push（ファイルを開かなくても警告を表示するため）
    scanner.scanAll().then(() => validateAllKsFiles()).catch(() => {});
  }

  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        // "[", "@", スペース, '"' で補完をトリガー
        triggerCharacters: ["[", "@", " ", '"'],
        resolveProvider: false,
      },
      hoverProvider: true,
      definitionProvider: true,
      referencesProvider: true,
    },
  };
});

/**
 * カーソル位置のタグコンテキストを解析する
 * 戻り値: タグ名と、カーソルがパラメータ部分にあるかどうか
 */
interface TagContext {
  tagName: string;
  isInParams: boolean;
  /** カーソル位置までに既に使用されているパラメータ名 */
  usedParams: string[];
}

function getTagContext(lineText: string, character: number): TagContext | null {
  const textUpToCursor = lineText.substring(0, character);

  // [] タグの検出: 最後の未閉じ "[" を探す
  const bracketMatch = textUpToCursor.match(/\[(\w+)((\s+.*)?)$/);
  if (bracketMatch) {
    const tagName = bracketMatch[1];
    const afterTag = bracketMatch[2];
    const isInParams = afterTag.length > 0;
    const usedParams = extractUsedParams(afterTag);
    return { tagName, isInParams, usedParams };
  }

  // @タグの検出: 行頭の@タグ
  const atMatch = textUpToCursor.match(/^@(\w+)((\s+.*)?)$/);
  if (atMatch) {
    const tagName = atMatch[1];
    const afterTag = atMatch[2];
    const isInParams = afterTag.length > 0;
    const usedParams = extractUsedParams(afterTag);
    return { tagName, isInParams, usedParams };
  }

  return null;
}

/**
 * テキストから既に使用されているパラメータ名を抽出する
 */
function extractUsedParams(text: string): string[] {
  const params: string[] = [];
  const regex = /(\w+)\s*=/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    params.push(match[1]);
  }
  return params;
}

/**
 * カーソル位置が "[" の直後か "@" の直後かを判定する
 * タグ名補完のトリガーに使用
 */
function isTagNameTrigger(lineText: string, character: number): "bracket" | "at" | null {
  const textUpToCursor = lineText.substring(0, character);

  // "[" の直後で、まだタグ名を入力中（閉じ括弧なし）
  if (/\[\w*$/.test(textUpToCursor)) {
    return "bracket";
  }

  // 行頭 "@" の直後
  if (/^@\w*$/.test(textUpToCursor)) {
    return "at";
  }

  return null;
}

/** パラメータ値コンテキスト */
interface ParamValueContext {
  tagName: string;
  paramName: string;
  currentValue: string;
}

/**
 * カーソルが paramName="..." の値入力中にあるかを判定する
 */
function getParamValueContext(
  lineText: string,
  character: number
): ParamValueContext | null {
  // まずタグコンテキストを取得
  const tagCtx = getTagContext(lineText, character);
  if (!tagCtx) return null;

  const textUpToCursor = lineText.substring(0, character);

  // パラメータ値の入力中かを判定: paramName="value まで入力している状態
  const valueMatch = textUpToCursor.match(/(\w+)\s*=\s*"([^"]*)$/);
  if (!valueMatch) return null;

  return {
    tagName: tagCtx.tagName,
    paramName: valueMatch[1],
    currentValue: valueMatch[2],
  };
}

/**
 * タグ名補完の候補を生成する
 */
function createTagCompletions(trigger: "bracket" | "at"): CompletionItem[] {
  return TAG_NAMES.map((name, index) => {
    const tag = TAG_DATABASE.get(name)!;
    // 必須パラメータのみをスニペットに含める
    const requiredParams = tag.params.filter((p) => p.required);
    let insertText: string;
    let insertTextFormat: InsertTextFormat;

    if (requiredParams.length > 0) {
      // スニペット: 必須パラメータをプレースホルダーとして追加
      const paramSnippets = requiredParams
        .map((p, i) => `${p.name}="\${${i + 1}}"`)
        .join(" ");
      if (trigger === "bracket") {
        insertText = `${name} ${paramSnippets}]`;
      } else {
        insertText = `${name} ${paramSnippets}`;
      }
      insertTextFormat = InsertTextFormat.Snippet;
    } else {
      if (trigger === "bracket") {
        insertText = `${name}]`;
      } else {
        insertText = name;
      }
      insertTextFormat = InsertTextFormat.PlainText;
    }

    return {
      label: name,
      kind: CompletionItemKind.Function,
      detail: tag.description.split("\n")[0],
      documentation: {
        kind: MarkupKind.Markdown,
        value: createTagDocumentation(tag),
      },
      insertText,
      insertTextFormat,
      sortText: String(index).padStart(4, "0"),
    };
  });
}

/**
 * パラメータ補完の候補を生成する
 */
function createParamCompletions(
  tagName: string,
  usedParams: string[]
): CompletionItem[] {
  const tag = TAG_DATABASE.get(tagName);
  if (!tag) return [];

  // 既に使用されているパラメータを除外
  const availableParams = tag.params.filter(
    (p) => !usedParams.includes(p.name)
  );

  return availableParams.map((param, index) => {
    const requiredLabel = param.required ? " (必須)" : "";
    return {
      label: param.name,
      kind: CompletionItemKind.Property,
      detail: `${param.name}${requiredLabel}`,
      documentation: {
        kind: MarkupKind.Markdown,
        value: param.description,
      },
      // スニペット: param="" の形式で挿入
      insertText: `${param.name}="\${1}"`,
      insertTextFormat: InsertTextFormat.Snippet,
      // 必須パラメータを優先的に表示
      sortText: (param.required ? "0" : "1") + String(index).padStart(4, "0"),
    };
  });
}

/**
 * タグのMarkdownドキュメントを生成する
 */
function createTagDocumentation(tag: TagDefinition): string {
  let doc = `**[${tag.name}]**\n\n`;
  doc += `${tag.description}\n\n`;

  if (tag.params.length > 0) {
    doc += "**パラメータ:**\n\n";
    for (const param of tag.params) {
      const requiredMark = param.required ? " `必須`" : "";
      doc += `- **${param.name}**${requiredMark}: ${param.description}\n`;
    }
  }

  return doc;
}

/**
 * マクロ補完の候補を生成する
 */
function createMacroCompletions(trigger: "bracket" | "at"): CompletionItem[] {
  const macros = scanner.getMacros();
  return macros.map((macro, index) => {
    const insertText =
      trigger === "bracket" ? `${macro.name}]` : macro.name;
    return {
      label: macro.name,
      kind: CompletionItemKind.Function,
      detail: macro.description ? macro.description.split("\n")[0] : `マクロ (${macro.file})`,
      documentation: {
        kind: MarkupKind.Markdown,
        value: `**[${macro.name}]** — ユーザー定義マクロ\n\n${macro.description ? macro.description + "\n\n" : ""}定義元: \`${macro.file}\` (行 ${macro.line + 1})`,
      },
      insertText,
      insertTextFormat: InsertTextFormat.PlainText,
      // タグ補完の後に表示（5000番台）
      sortText: String(5000 + index).padStart(6, "0"),
    };
  });
}

/**
 * storage パラメータのアセットファイル補完候補を生成する
 */
function createStorageCompletions(tagName: string): CompletionItem[] {
  const category = TAG_STORAGE_MAPPING.get(tagName);
  if (!category) return [];

  const files = scanner.getAssetsForCategory(category);
  return files.map((file, index) => ({
    label: file,
    kind: CompletionItemKind.File,
    detail: `${category}/`,
    sortText: String(index).padStart(4, "0"),
  }));
}

/**
 * target パラメータのラベル補完候補を生成する
 */
function createTargetCompletions(): CompletionItem[] {
  const labels = scanner.getLabels();
  return labels.map((label, index) => ({
    label: `*${label.name}`,
    kind: CompletionItemKind.Reference,
    detail: label.file,
    documentation: {
      kind: MarkupKind.Markdown,
      value: `ラベル **\*${label.name}**\n\n定義元: \`${label.file}\` (行 ${label.line + 1})`,
    },
    sortText: String(index).padStart(4, "0"),
  }));
}

// 補完ハンドラ
connection.onCompletion(
  (params: TextDocumentPositionParams): CompletionItem[] => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];

    const line = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line, character: params.position.character },
    });

    // 1. タグ名補完 + マクロ補完: "[" or "@" の直後
    const trigger = isTagNameTrigger(line, params.position.character);
    if (trigger) {
      const tagItems = createTagCompletions(trigger);
      const macroItems = createMacroCompletions(trigger);
      return [...tagItems, ...macroItems];
    }

    // 2. パラメータ値補完: storage="" / target="" の値入力中
    const valueCtx = getParamValueContext(line, params.position.character);
    if (valueCtx) {
      if (valueCtx.paramName === "storage") {
        return createStorageCompletions(valueCtx.tagName);
      }
      if (valueCtx.paramName === "target") {
        return createTargetCompletions();
      }
      // その他のパラメータ値は補完なし
      return [];
    }

    // 3. パラメータ名補完
    const context = getTagContext(line, params.position.character);
    if (context && context.isInParams) {
      return createParamCompletions(context.tagName, context.usedParams);
    }

    return [];
  }
);

/** 定義ジャンプ・参照検索の対象種別 */
interface DefinitionContext {
  kind: "label" | "macro" | "file" | "chara";
  name: string;
}

/**
 * カーソル位置がジャンプ可能な要素上にあるかを判定する
 * label: target="*xxx" のラベル参照
 * macro: [xxx ...] / @xxx でTAG_DATABASEに無いタグ名（＝マクロ）
 * file: storage="xxx.ks" のファイル参照
 */
function getDefinitionContext(
  lineText: string,
  character: number
): DefinitionContext | null {
  // 1. パラメータ値内の判定（target / storage）
  const valueCtx = getParamValueContext(lineText, character);
  if (valueCtx) {
    // currentValue はカーソル位置までの部分文字列なので、
    // 閉じクォートまでを結合して完全な値を取得する
    const afterCursor = lineText.substring(character);
    const closingQuoteIdx = afterCursor.indexOf('"');
    const fullValue =
      closingQuoteIdx >= 0
        ? valueCtx.currentValue + afterCursor.substring(0, closingQuoteIdx)
        : valueCtx.currentValue;

    if (valueCtx.paramName === "target" && fullValue.length > 0) {
      // target="*labelName" と target="labelName"（*なし）の両方に対応
      const name = fullValue.startsWith("*") ? fullValue.substring(1) : fullValue;
      return { kind: "label", name };
    }
    if (valueCtx.paramName === "storage" && fullValue.length > 0) {
      return { kind: "file", name: fullValue };
    }
    // chara_* タグの name 属性でキャラクター参照を検出
    if (valueCtx.paramName === "name" && valueCtx.tagName.startsWith("chara_") && fullValue.length > 0) {
      return { kind: "chara", name: fullValue };
    }
    return null;
  }

  // 2. タグ名の判定
  const tagCtx = getTagContext(lineText, character);
  if (tagCtx && !tagCtx.isInParams) {
    // getTagContext はカーソル位置までしか tagName を取得しないため、
    // カーソル以降の単語文字を結合して完全なタグ名を復元する
    const afterCursor = lineText.substring(character);
    const remainingWord = afterCursor.match(/^(\w*)/)?.[1] ?? "";
    const fullTagName = tagCtx.tagName + remainingWord;

    // TAG_DATABASE に無い → ユーザー定義マクロの可能性
    if (!TAG_DATABASE.has(fullTagName)) {
      return { kind: "macro", name: fullTagName };
    }
  }

  return null;
}

/**
 * FileReference を LSP の Location に変換する
 */
function refToLocation(ref: FileReference): Location {
  return {
    uri: scanner.resolveFilePath(ref.file),
    range: Range.create(
      Position.create(ref.line, ref.startChar),
      Position.create(ref.line, ref.endChar)
    ),
  };
}

// 定義ジャンプハンドラ
connection.onDefinition(
  (params: DefinitionParams): Location | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const lineText = document
      .getText({
        start: { line: params.position.line, character: 0 },
        end: { line: params.position.line + 1, character: 0 },
      })
      .replace(/\n$/, "");

    const ctx = getDefinitionContext(lineText, params.position.character);
    if (!ctx) return null;

    switch (ctx.kind) {
      case "label": {
        // ラベル定義へジャンプ
        const label = scanner.getLabels().find((l) => l.name === ctx.name);
        if (!label) return null;
        return {
          uri: scanner.resolveFilePath(label.file),
          range: Range.create(
            Position.create(label.line, 0),
            Position.create(label.line, label.name.length + 1) // +1 は "*" の分
          ),
        };
      }
      case "file": {
        // ファイルの先頭へジャンプ
        // storage のタグ名に応じたカテゴリでパスを解決
        const tagCtx = getTagContext(lineText, params.position.character);
        if (!tagCtx) return null;
        const category = TAG_STORAGE_MAPPING.get(tagCtx.tagName);
        if (!category) return null;
        const filePath = `${category}/${ctx.name}`;
        return {
          uri: scanner.resolveFilePath(filePath),
          range: Range.create(Position.create(0, 0), Position.create(0, 0)),
        };
      }
      case "macro": {
        // マクロ定義へジャンプ
        const macro = scanner
          .getMacros()
          .find((m) => m.name === ctx.name);
        if (!macro) return null;
        return {
          uri: scanner.resolveFilePath(macro.file),
          range: Range.create(
            Position.create(macro.line, 0),
            Position.create(macro.line, 0)
          ),
        };
      }
      case "chara": {
        // [chara_new name="xxx"] 定義へジャンプ
        const chara = scanner.getCharas().find((c) => c.name === ctx.name);
        if (!chara) return null;
        return {
          uri: scanner.resolveFilePath(chara.file),
          range: Range.create(
            Position.create(chara.line, 0),
            Position.create(chara.line, 0)
          ),
        };
      }
    }
  }
);

/**
 * カーソル位置がラベル定義行 (*xxx) にあるかを判定する
 */
function getLabelDefinitionAtCursor(
  lineText: string,
  character: number
): string | null {
  const match = lineText.match(/^\*(\w+)/);
  if (match && character <= match[0].length) {
    return match[1];
  }
  return null;
}

/**
 * カーソル位置がマクロ定義行 ([macro name="xxx"]) にあるかを判定する
 */
function getMacroDefinitionAtCursor(lineText: string): string | null {
  const match = lineText.match(/\[macro\s+name\s*=\s*"(\w+)"\s*\]/i);
  if (match) {
    return match[1];
  }
  return null;
}

/**
 * カーソル位置がキャラクター定義行 ([chara_new ... name="xxx" ...]) にあるかを判定する
 */
function getCharaDefinitionAtCursor(lineText: string): string | null {
  const match = lineText.match(/\[chara_new\b[^\]]*\bname\s*=\s*"([^"]+)"/i);
  if (match) {
    return match[1];
  }
  return null;
}

// 参照検索ハンドラ
connection.onReferences(
  (params: ReferenceParams): Location[] => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];

    const lineText = document
      .getText({
        start: { line: params.position.line, character: 0 },
        end: { line: params.position.line + 1, character: 0 },
      })
      .replace(/\n$/, "");

    const character = params.position.character;
    const results: Location[] = [];

    // 1. ラベル定義行 (*xxx) → 全参照を返す
    const labelDef = getLabelDefinitionAtCursor(lineText, character);
    if (labelDef) {
      const refs = scanner.findLabelReferences(labelDef);
      return refs.map(refToLocation);
    }

    // 2. マクロ定義行 ([macro name="xxx"]) → 全使用箇所を返す
    const macroDef = getMacroDefinitionAtCursor(lineText);
    if (macroDef) {
      const refs = scanner.findMacroReferences(macroDef);
      return refs.map(refToLocation);
    }

    // 3. キャラクター定義行 ([chara_new name="xxx"]) → 全参照箇所を返す
    const charaDef = getCharaDefinitionAtCursor(lineText);
    if (charaDef) {
      const refs = scanner.findCharaReferences(charaDef);
      return refs.map(refToLocation);
    }

    // 4. ラベル参照 (target="*xxx") → 定義 + 他の参照箇所
    const defCtx = getDefinitionContext(lineText, character);
    if (defCtx) {
      if (defCtx.kind === "label") {
        // 定義箇所を追加
        const label = scanner.getLabels().find((l) => l.name === defCtx.name);
        if (label) {
          results.push({
            uri: scanner.resolveFilePath(label.file),
            range: Range.create(
              Position.create(label.line, 0),
              Position.create(label.line, label.name.length + 1)
            ),
          });
        }
        // 全参照箇所を追加
        const refs = scanner.findLabelReferences(defCtx.name);
        results.push(...refs.map(refToLocation));
        return results;
      }

      // 4. マクロ使用 ([xxx] / @xxx) → 定義 + 他の使用箇所
      if (defCtx.kind === "macro") {
        // 定義箇所を追加
        const macro = scanner.getMacros().find((m) => m.name === defCtx.name);
        if (macro) {
          results.push({
            uri: scanner.resolveFilePath(macro.file),
            range: Range.create(
              Position.create(macro.line, 0),
              Position.create(macro.line, 0)
            ),
          });
        }
        // 全使用箇所を追加
        const refs = scanner.findMacroReferences(defCtx.name);
        results.push(...refs.map(refToLocation));
        return results;
      }

      // 5. キャラクター参照 (chara_* name="xxx") → 定義 + 他の参照箇所
      if (defCtx.kind === "chara") {
        // 定義箇所を追加
        const chara = scanner.getCharas().find((c) => c.name === defCtx.name);
        if (chara) {
          results.push({
            uri: scanner.resolveFilePath(chara.file),
            range: Range.create(
              Position.create(chara.line, 0),
              Position.create(chara.line, 0)
            ),
          });
        }
        // 全参照箇所を追加
        const refs = scanner.findCharaReferences(defCtx.name);
        results.push(...refs.map(refToLocation));
        return results;
      }
    }

    return results;
  }
);

// ホバーハンドラ
connection.onHover(
  (params: TextDocumentPositionParams): Hover | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    // カーソル位置の行全体を取得
    const lineText = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line + 1, character: 0 },
    }).replace(/\n$/, "");

    const character = params.position.character;

    // カーソル位置の単語を取得
    const wordRange = getWordRangeAtPosition(lineText, character);
    if (!wordRange) return null;

    const word = lineText.substring(wordRange.start, wordRange.end);

    // タグ名としてのホバー: [tagName ...] または @tagName の中
    const tagHover = getTagHover(lineText, character, word);
    if (tagHover) return tagHover;

    // パラメータ名としてのホバー
    const paramHover = getParamHover(lineText, character, word);
    if (paramHover) return paramHover;

    return null;
  }
);

/**
 * 指定位置にある単語の範囲を取得する
 */
function getWordRangeAtPosition(
  lineText: string,
  character: number
): { start: number; end: number } | null {
  // 単語文字（英数字とアンダースコア）の範囲を検出
  if (character >= lineText.length) return null;

  const wordRegex = /\w+/g;
  let match;
  while ((match = wordRegex.exec(lineText)) !== null) {
    const start = match.index;
    const end = start + match[0].length;
    if (character >= start && character < end) {
      return { start, end };
    }
  }
  return null;
}

/**
 * タグ名に対するホバー情報を返す
 */
function getTagHover(
  lineText: string,
  character: number,
  word: string
): Hover | null {
  // [] タグ: [tagName の形式で、wordがタグ名部分にあるか
  const bracketRegex = /\[(\w+)/g;
  let match;
  while ((match = bracketRegex.exec(lineText)) !== null) {
    const tagStart = match.index + 1; // "[" の次
    const tagEnd = tagStart + match[1].length;
    if (character >= tagStart && character < tagEnd) {
      const tag = TAG_DATABASE.get(match[1]);
      if (tag) {
        return {
          contents: {
            kind: MarkupKind.Markdown,
            value: createTagDocumentation(tag),
          },
        };
      }
    }
  }

  // @タグ: @tagName の形式
  const atRegex = /^@(\w+)/;
  const atMatch = lineText.match(atRegex);
  if (atMatch) {
    const tagStart = 1; // "@" の次
    const tagEnd = tagStart + atMatch[1].length;
    if (character >= tagStart && character < tagEnd) {
      const tag = TAG_DATABASE.get(atMatch[1]);
      if (tag) {
        return {
          contents: {
            kind: MarkupKind.Markdown,
            value: createTagDocumentation(tag),
          },
        };
      }
    }
  }

  // 単語がタグ名と一致する場合のフォールバック
  if (TAG_DATABASE.has(word)) {
    // ただし、パラメータ値の中にある場合は除外
    const beforeWord = lineText.substring(0, character);
    // 直前に "=" があればパラメータ値なのでスキップ
    if (!/=\s*"?[^"]*$/.test(beforeWord)) {
      const tag = TAG_DATABASE.get(word)!;
      return {
        contents: {
          kind: MarkupKind.Markdown,
          value: createTagDocumentation(tag),
        },
      };
    }
  }

  return null;
}

/**
 * パラメータ名に対するホバー情報を返す
 */
function getParamHover(
  lineText: string,
  character: number,
  word: string
): Hover | null {
  // カーソル位置がタグ内にあるかを判定
  // 直前の "[" を探す
  let bracketStart = -1;
  for (let i = character; i >= 0; i--) {
    if (lineText[i] === "[") {
      bracketStart = i;
      break;
    }
    if (lineText[i] === "]") break; // 閉じ括弧に先に到達した場合はタグ外
  }

  let tagName: string | null = null;

  if (bracketStart >= 0) {
    const afterBracket = lineText.substring(bracketStart + 1);
    const tagMatch = afterBracket.match(/^(\w+)/);
    if (tagMatch) {
      tagName = tagMatch[1];
    }
  } else {
    // @タグの場合
    const atMatch = lineText.match(/^@(\w+)/);
    if (atMatch) {
      tagName = atMatch[1];
    }
  }

  if (!tagName) return null;

  const tag = TAG_DATABASE.get(tagName);
  if (!tag) return null;

  // wordがこのタグのパラメータ名と一致するか
  // かつ、直後に "=" が続くかチェック（パラメータ名として使われている場合）
  const afterWord = lineText.substring(character);
  const wordEnd = afterWord.match(/^\w*/);
  const charAfterWord =
    wordEnd && character + wordEnd[0].length < lineText.length
      ? lineText[character + wordEnd[0].length]
      : "";

  if (charAfterWord === "=") {
    const param = tag.params.find((p) => p.name === word);
    if (param) {
      const requiredMark = param.required ? " `必須`" : "";
      return {
        contents: {
          kind: MarkupKind.Markdown,
          value: `**${param.name}**${requiredMark}\n\n${param.description}`,
        },
      };
    }
  }

  return null;
}

/** 1行のタグ解析結果 */
interface ParsedTag {
  tagName: string;
  params: Map<string, string>; // パラメータ名 → 値
  tagStart: number;            // タグ名の開始文字位置
  tagEnd: number;              // タグ名の終了文字位置
}

/**
 * `param="value"` 形式のテキストを Map に変換する
 */
function parseParams(text: string): Map<string, string> {
  const map = new Map<string, string>();
  // クォートなし値は ] をデリミタとして除外する（[tag param=value] の ] を取り込まないため）
  const regex = /(\w+)\s*=\s*"([^"]*)"|(\w+)\s*=\s*([^\s\]]+)/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m[1]) map.set(m[1], m[2]);
    else if (m[3]) map.set(m[3], m[4]);
  }
  return map;
}

/**
 * 1行のテキストをタグ名とパラメータにパースする
 * コメント行（;で始まる）は null を返す
 */
function parseLine(lineText: string): ParsedTag | null {
  const trimmed = lineText.trimStart();
  if (trimmed.startsWith(";")) return null; // コメント行はスキップ

  // [] タグ形式（タグ名は字母始まりに限定: 配列リテラル [0] 等を除外）
  const bracketMatch = lineText.match(/\[([a-zA-Z_]\w*)([^\]]*)\]?/);
  if (bracketMatch) {
    const tagName = bracketMatch[1];
    const tagStart = lineText.indexOf("[") + 1;
    return {
      tagName,
      params: parseParams(bracketMatch[2] ?? ""),
      tagStart,
      tagEnd: tagStart + tagName.length,
    };
  }

  // @タグ形式
  const atMatch = lineText.match(/^@(\w+)(.*)/);
  if (atMatch) {
    const tagName = atMatch[1];
    return {
      tagName,
      params: parseParams(atMatch[2] ?? ""),
      tagStart: 1,
      tagEnd: 1 + tagName.length,
    };
  }

  return null;
}

/**
 * 指定パラメータの値部分の Range を計算する（波線位置計算用）
 * 見つからない場合は行全体の Range を返す
 */
function getParamValueRangeInLine(
  lineText: string,
  lineIndex: number,
  paramName: string,
  value: string
): Range {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // クォートあり: param="value"
  const quotedPattern = new RegExp(`${paramName}\\s*=\\s*"(${escaped})"`);
  const qm = lineText.match(quotedPattern);
  if (qm && qm.index !== undefined) {
    const quotePos = lineText.indexOf('"', qm.index + paramName.length);
    const start = quotePos + 1;
    return Range.create(
      Position.create(lineIndex, start),
      Position.create(lineIndex, start + value.length)
    );
  }

  // クォートなし: param=value または param = value
  const unquotedPattern = new RegExp(`${paramName}\\s*=\\s*(${escaped})`);
  const um = lineText.match(unquotedPattern);
  if (um && um.index !== undefined) {
    // フルマッチの末尾からキャプチャ長を引いた位置が値の開始
    const start = um.index + um[0].length - um[1].length;
    return Range.create(
      Position.create(lineIndex, start),
      Position.create(lineIndex, start + value.length)
    );
  }

  return Range.create(
    Position.create(lineIndex, 0),
    Position.create(lineIndex, lineText.length)
  );
}

/**
 * ドキュメント全体を検証して診断情報リストを返す
 * スキャン未完了の場合は空配列を返して偽陽性を防ぐ
 */
function validateDocument(document: TextDocument): Diagnostic[] {
  if (!scanner.isInitialized()) return []; // スキャン未完了時はスキップ

  const diagnostics: Diagnostic[] = [];
  const lines = document.getText().split("\n");

  // 定義済みラベル・マクロ・キャラをセットにキャッシュ
  const knownLabels = new Set(scanner.getLabels().map((l) => l.name));
  const knownMacros = new Set(scanner.getMacros().map((m) => m.name));
  const knownCharas = new Set(scanner.getCharas().map((c) => c.name));

  let inMacroBlock = false;  // [macro]〜[endmacro] 内はスキップ
  let inScriptBlock = false; // [iscript]〜[endscript] 内はスキップ

  // 診断5用: このドキュメントで定義されたラベルを収集する
  const definedLabels: Array<{ name: string; line: number }> = [];
  // 診断7用: このドキュメントで定義されたキャラクターを収集する
  const definedCharas: Array<{ name: string; line: number }> = [];

  for (let i = 0; i < lines.length; i++) {
    // ラベル定義行（*labelName）を検出して収集
    const labelMatch = lines[i].match(/^\*(\w+)/);
    if (labelMatch) {
      definedLabels.push({ name: labelMatch[1], line: i });
    }

    const parsed = parseLine(lines[i]);
    if (!parsed) continue;
    const { tagName, params, tagStart, tagEnd } = parsed;

    // スクリプトブロック境界を追跡（JS コードはタグ解析対象外）
    if (tagName === "iscript") { inScriptBlock = true; continue; }
    if (tagName === "endscript") { inScriptBlock = false; continue; }
    if (inScriptBlock) continue;

    // マクロブロック境界を追跡
    if (tagName === "macro") { inMacroBlock = true; continue; }
    if (tagName === "endmacro") { inMacroBlock = false; continue; }
    if (inMacroBlock) continue;

    // 診断3: 未定義タグ / 未定義マクロ
    if (!TAG_DATABASE.has(tagName) && !knownMacros.has(tagName)) {
      diagnostics.push(Diagnostic.create(
        Range.create(Position.create(i, tagStart), Position.create(i, tagEnd)),
        `未定義のタグまたはマクロ: "${tagName}"`,
        DiagnosticSeverity.Warning,
        "tyrano-undefined-macro",
        "tyranoscript"
      ));
      continue; // 未知タグはパラメータ検査をスキップ
    }

    const tagDef = TAG_DATABASE.get(tagName);
    if (!tagDef) continue;

    // 診断1: 必須パラメータ欠落
    for (const paramDef of tagDef.params) {
      if (paramDef.required && !params.has(paramDef.name)) {
        diagnostics.push(Diagnostic.create(
          Range.create(Position.create(i, tagStart), Position.create(i, tagEnd)),
          `[${tagName}] の必須パラメータ "${paramDef.name}" が指定されていません`,
          DiagnosticSeverity.Error,
          "tyrano-missing-param",
          "tyranoscript"
        ));
      }
    }

    // 診断2: 存在しないファイル参照
    const storageValue = params.get("storage");
    if (
      storageValue &&
      !storageValue.startsWith("[") &&
      !storageValue.startsWith("%") &&
      !storageValue.startsWith("&")
    ) {
      // folder パラメータがある場合はそのディレクトリを優先する
      const folderOverride = params.get("folder") as AssetCategory | undefined;
      const category = folderOverride ?? TAG_STORAGE_MAPPING.get(tagName);
      if (category) {
        // ../を含むパスもキャッシュ外として実ファイル存在確認にフォールバック
        const exists = storageValue.includes("../")
          ? scanner.assetFileExists(category, storageValue)
          : scanner.getAssetsForCategory(category).includes(storageValue);
        if (!exists) {
          diagnostics.push(Diagnostic.create(
            getParamValueRangeInLine(lines[i], i, "storage", storageValue),
            `ファイルが見つかりません: "${storageValue}" (${category}/)`,
            DiagnosticSeverity.Warning,
            "tyrano-missing-file",
            "tyranoscript"
          ));
        }
      }
    }

    // 診断2b: storage以外のファイル参照パラメータ（graphic / enterimg / leaveimg / clickimg）
    // ユーザー定義マクロには適用しない（パラメータの意味が不明なため）
    if (TAG_DATABASE.has(tagName)) {
      for (const [paramName, category] of PARAM_FILE_MAPPING) {
        const paramValue = params.get(paramName);
        if (
          !paramValue ||
          paramValue.startsWith("[") ||
          paramValue.startsWith("%") ||
          paramValue.startsWith("&")
        ) continue;
        // ../を含むパスは実ファイル存在確認で判定
        let fileExists: boolean;
        if (paramValue.includes("../")) {
          fileExists = scanner.assetFileExists(category, paramValue);
        } else {
          const available = scanner.getAssetsForCategory(category);
          if (available.length === 0) continue; // スキャン未完了は偽陽性を避けるためスキップ
          fileExists = available.includes(paramValue);
        }
        if (!fileExists) {
          diagnostics.push(Diagnostic.create(
            getParamValueRangeInLine(lines[i], i, paramName, paramValue),
            `ファイルが見つかりません: "${paramValue}" (${category}/)`,
            DiagnosticSeverity.Warning,
            "tyrano-missing-file",
            "tyranoscript"
          ));
        }
      }
    }

    // 診断4: 未定義ラベル参照
    const targetValue = params.get("target");
    if (targetValue && targetValue.startsWith("*")) {
      const labelName = targetValue.substring(1);
      if (labelName.length > 0 && !knownLabels.has(labelName)) {
        diagnostics.push(Diagnostic.create(
          getParamValueRangeInLine(lines[i], i, "target", targetValue),
          `未定義のラベル: "${targetValue}" が見つかりません`,
          DiagnosticSeverity.Warning,
          "tyrano-undefined-label",
          "tyranoscript"
        ));
      }
    }

    // 診断6: 無効なキャラクター参照（chara_new 以外の chara_* タグの name 属性を検証）
    if (tagName.startsWith("chara_") && tagName !== "chara_new") {
      const nameValue = params.get("name");
      if (
        nameValue &&
        !nameValue.startsWith("[") &&
        !nameValue.startsWith("%") &&
        !nameValue.startsWith("&")
      ) {
        if (!knownCharas.has(nameValue)) {
          diagnostics.push(Diagnostic.create(
            getParamValueRangeInLine(lines[i], i, "name", nameValue),
            `未定義のキャラクター: "${nameValue}" は [chara_new] で定義されていません`,
            DiagnosticSeverity.Warning,
            "tyrano-undefined-chara",
            "tyranoscript"
          ));
        }
      }
    }

    // 診断7用: このドキュメントで定義された chara_new を収集する
    if (tagName === "chara_new") {
      const nameValue = params.get("name");
      if (nameValue) definedCharas.push({ name: nameValue, line: i });
    }
  }

  // 診断5: 未使用ラベル（全ファイルから参照されていないラベルを警告）
  // エントリーポイントとして暗黙的に参照されるラベルはスキップ
  const ENTRY_LABELS = new Set(["start"]);
  for (const { name, line } of definedLabels) {
    if (ENTRY_LABELS.has(name)) continue;
    const refs = scanner.findLabelReferences(name);
    // 静的参照が0件でも、同じファイルに動的参照（target=&var / target=%var）が
    // 1つでもあればそのラベルが動的にターゲットになりうるためスキップ
    if (refs.length === 0 && !scanner.hasDynamicTargetReference(document.uri)) {
      diagnostics.push(Diagnostic.create(
        Range.create(Position.create(line, 0), Position.create(line, name.length + 1)), // +1 は "*" の分
        `ラベル "*${name}" はどこからも参照されていません`,
        DiagnosticSeverity.Warning,
        "tyrano-unused-label",
        "tyranoscript"
      ));
    }
  }

  // 診断7: 未使用キャラクター（全ファイルからどこからも参照されない chara_new 定義を警告）
  for (const { name, line } of definedCharas) {
    const refs = scanner.findCharaReferences(name);
    if (refs.length === 0) {
      diagnostics.push(Diagnostic.create(
        getParamValueRangeInLine(lines[line], line, "name", name),
        `キャラクター "${name}" はどこからも参照されていません`,
        DiagnosticSeverity.Warning,
        "tyrano-unused-chara",
        "tyranoscript"
      ));
    }
  }

  return applySuppressionComments(diagnostics, lines);
}

/**
 * コメントディレクティブによる診断抑制を適用する
 *
 * 対応書式（code を省略すると全コードに適用）:
 *   ; tyranoscript-disable-next-line [code]  ← 次行を抑制
 *   ; tyranoscript-disable-line [code]       ← 同行を抑制
 *   ; tyranoscript-disable [code]            ← 範囲開始
 *   ; tyranoscript-enable [code]             ← 範囲終了
 */
function applySuppressionComments(diagnostics: Diagnostic[], lines: string[]): Diagnostic[] {
  // disable/enable 範囲を事前に収集する
  const disabledRanges: Array<{ start: number; end: number; code: string | undefined }> = [];
  const openDisables = new Map<string | undefined, number>(); // code → 開始行

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const disableM = line.match(/;\s*tyranoscript-disable(?!-next-line|-line)(?:\s+(\S+))?/);
    const enableM  = line.match(/;\s*tyranoscript-enable(?:\s+(\S+))?/);

    if (disableM) {
      const code = disableM[1] as string | undefined;
      if (!openDisables.has(code)) openDisables.set(code, i);
    }
    if (enableM) {
      const code = enableM[1] as string | undefined;
      const start = openDisables.get(code);
      if (start !== undefined) {
        disabledRanges.push({ start, end: i, code });
        openDisables.delete(code);
      }
    }
  }
  // 閉じられていない disable はファイル末尾まで有効
  for (const [code, start] of openDisables) {
    disabledRanges.push({ start, end: lines.length - 1, code });
  }

  return diagnostics.filter((diag) => {
    const lineIdx = diag.range.start.line;
    const diagCode = diag.code as string | undefined;

    const matches = (suppressCode: string | undefined) =>
      suppressCode === undefined || suppressCode === diagCode;

    // disable-next-line: 前行にコメントがあるか
    if (lineIdx > 0) {
      const m = lines[lineIdx - 1].match(/;\s*tyranoscript-disable-next-line(?:\s+(\S+))?/);
      if (m && matches(m[1] as string | undefined)) return false;
    }

    // disable-line: 同行にコメントがあるか
    const m2 = lines[lineIdx]?.match(/;\s*tyranoscript-disable-line(?:\s+(\S+))?/);
    if (m2 && matches(m2[1] as string | undefined)) return false;

    // disable/enable 範囲内か
    for (const range of disabledRanges) {
      if (lineIdx >= range.start && lineIdx <= range.end && matches(range.code)) return false;
    }

    return true;
  });
}

/**
 * ドキュメントを検証して診断結果をクライアントに push する
 */
function validateAndPublish(uri: string, document: TextDocument): void {
  const diagnostics = validateDocument(document);
  connection.sendDiagnostics({ uri, diagnostics });
}

/**
 * スキャン完了後に全 .ks ファイルを検証して push する
 * ファイルを開かなくても Zed の警告バーに反映させるため
 */
function validateAllKsFiles(): void {
  for (const { uri, content } of scanner.getAllKsFiles()) {
    const openDoc = documents.get(uri);
    const doc = openDoc ?? TextDocument.create(uri, "tyranoscript", 0, content);
    validateAndPublish(uri, doc);
  }
}

// KSファイル変更時のインクリメンタル更新（500msデバウンス）
const updateTimers: Map<string, ReturnType<typeof setTimeout>> = new Map();
documents.onDidChangeContent((change) => {
  const uri = change.document.uri;
  if (!uri.endsWith(".ks")) return;

  // 既存タイマーをクリア
  const existing = updateTimers.get(uri);
  if (existing) clearTimeout(existing);

  // 500ms後にインデックスを更新して診断を push する
  // ファイル間参照（chara/label/macro の定義と参照が別ファイル）に対応するため、
  // 変更ファイルのインデックス更新後に全 KS ファイルを再検証する
  updateTimers.set(
    uri,
    setTimeout(() => {
      scanner.updateFile(uri, change.document.getText());
      validateAllKsFiles();
      updateTimers.delete(uri);
    }, 500)
  );
});

// ファイルを閉じたとき: 再度 push して診断を維持する
// Zed が onDidClose で診断をクリアする場合に備えて再送する
documents.onDidClose((event) => {
  if (!event.document.uri.endsWith(".ks")) return;
  const uri = event.document.uri;
  const ksFile = scanner.getAllKsFiles().find((f) => f.uri === uri);
  if (!ksFile) return;
  const doc = TextDocument.create(uri, "tyranoscript", 0, ksFile.content);
  connection.sendDiagnostics({ uri, diagnostics: validateDocument(doc) });
});

// ドキュメントマネージャーを接続にバインド
documents.listen(connection);

// サーバーを開始
connection.listen();
