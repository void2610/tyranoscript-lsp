# @void2610/tyranoscript-lsp

[English](README.md)

[TyranoScript](https://tyrano.jp/)向けLanguage Serverです。[VSCode](https://code.visualstudio.com/)拡張 [tyranoscript-vscode](https://github.com/void2610/tyranoscript-vscode) および [Zed](https://zed.dev/)拡張 [tyranoscript-zed](https://github.com/void2610/tyranoscript-zed) から利用されます。

## 機能

- タグ名の補完（`[` または `@` 入力時）
- パラメータの補完（使用済みパラメータを自動除外）
- 必須パラメータのスニペット自動挿入
- ホバーによるタグ・パラメータのドキュメント表示
- ワークスペース内のアセット・ラベル・マクロ・キャラクターのインデックス自動構築
  - `tf.xxx` 変数の定義/参照をインデックス
  - `storage=""` にアセットファイル名を補完
  - `target=""` にラベル名（`*xxx`）を補完
  - ユーザー定義マクロの補完・ホバードキュメント
  - ラベル定義直前コメントのホバー表示
- 定義へジャンプ（Go to Definition）
  - `target="*xxx"` → ラベル定義行へジャンプ
  - `nextOrderWithLabel("*xxx", "file.ks")` → ラベル定義行へジャンプ
  - `storage="xxx.ks"` → 対象ファイル先頭へジャンプ
  - `[mymacro]` / `@mymacro` → マクロ定義行へジャンプ
  - `tf.xxx` → 代入元の定義行へジャンプ
  - `[chara_show name="xxx"]` → `[chara_new name="xxx"]` 定義行へジャンプ
  - `[chara_mod name="akane" face="smile"]` の `face=` → `[chara_face]` 定義行へジャンプ
  - `[chara_config ptext="namebox"]` / `[glyph use="namebox"]` → `[ptext name="namebox"]` 定義行へジャンプ
- 参照検索（Find References）
  - ラベル定義行 / 参照箇所から全使用箇所を一覧表示
  - `nextOrderWithLabel("*xxx", "file.ks")` の JS ラベル参照も対象
  - マクロ定義行 / 使用箇所から全使用箇所を一覧表示
  - `tf.xxx` の定義行 / 参照箇所から全使用箇所を一覧表示
  - キャラクター定義行 / 参照箇所から全使用箇所を一覧表示
  - 表情定義行（`[chara_face]`）/ 参照箇所から全使用箇所を一覧表示
  - 名前付き要素定義行（`[ptext]` / `[image]`）/ 参照箇所から全使用箇所を一覧表示

### マクロ・ラベルの説明コメント

マクロ定義やラベル定義の直前コメントは、ホバー説明として表示されます。

推奨フォーマット:

```ks
; load_keyword_data マクロ
; Parameters: storage - データファイルのパス
; Description: 指定ファイルを call して tf.kw_list / kw_key / judge_table を注入する
[macro name="load_keyword_data"]

; show_report_ui ラベル
; Description: tf.kw_list を元にキーワードボタンを描画し、クリック待ちに入る
; 完成ボタン押下後に on_complete_click を経て return する
*show_report_ui
```

`Description:` や `Parameters:` の後続コメント行は、その項目の継続行として扱われます。
- 診断（Diagnostics）— 開いていないファイルも含めプロジェクト全体を検査
  - 必須パラメータ欠落（エラー）
  - 存在しないファイル参照（警告）: `storage` / `graphic` / `enterimg` / `leaveimg` / `clickimg`
  - 未定義タグ/マクロ（警告）
  - 未定義ラベル参照（警告）
  - 未使用ラベル（警告）
  - 未定義キャラクター参照（警告）: `chara_show`/`chara_hide` 等で `chara_new` 未定義の name を参照
  - 未使用キャラクター（警告）: `chara_new` で定義したがどこからも参照されない
  - `[iscript]〜[endscript]` 内の JS コードを誤検出しないようスキップ
  - `../` を含む相対パスも実ファイル存在確認
  - 変数展開（`&` `%` `[`）プレフィックスをスキップ

### 警告の抑制

コメントディレクティブで特定の警告を無効化できます。

```
; tyranoscript-disable-next-line              ← 次の1行を全抑制
; tyranoscript-disable-next-line tyrano-unused-label  ← 特定コードのみ抑制
[jump target="*unused"] ; tyranoscript-disable-line   ← 同じ行を抑制
; tyranoscript-disable                        ← ここから範囲抑制
...
; tyranoscript-enable                         ← ここまで
```

## 開発

```bash
npm install
npm run build    # dist/server.js にバンドル
npm run watch    # ファイル変更時に自動ビルド
```

## 謝辞

タグ辞書データは [orukRed/tyranosyntax](https://github.com/orukRed/tyranosyntax)（VSCode拡張）の `tyrano.Tooltip.json` を基に作成しました。

## ライセンス

[MIT](LICENSE)
