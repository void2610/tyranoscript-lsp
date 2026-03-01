# @void2610/tyranoscript-lsp

[TyranoScript](https://tyrano.jp/)向けLanguage Serverです。[Zed](https://zed.dev/)拡張 [tyranoscript-zed](https://github.com/void2610/tyranoscript-zed) から利用されます。

## 機能

- タグ名の補完（`[` または `@` 入力時）
- パラメータの補完（使用済みパラメータを自動除外）
- 必須パラメータのスニペット自動挿入
- ホバーによるタグ・パラメータのドキュメント表示
- ワークスペース内のアセット・ラベル・マクロのインデックス自動構築
  - `storage=""` にアセットファイル名を補完
  - `target=""` にラベル名（`*xxx`）を補完
  - ユーザー定義マクロの補完・ホバードキュメント
- 定義へジャンプ（Go to Definition）
  - `target="*xxx"` → ラベル定義行へジャンプ
  - `storage="xxx.ks"` → 対象ファイル先頭へジャンプ
  - `[mymacro]` / `@mymacro` → マクロ定義行へジャンプ
- 参照検索（Find References）
  - ラベル定義行 / 参照箇所から全使用箇所を一覧表示
  - マクロ定義行 / 使用箇所から全使用箇所を一覧表示
- 診断（Diagnostics）— 開いていないファイルも含めプロジェクト全体を検査
  - 必須パラメータ欠落（エラー）
  - 存在しないファイル参照（警告）: `storage` / `graphic` / `enterimg` / `leaveimg` / `clickimg`
  - 未定義タグ/マクロ（警告）
  - 未定義ラベル参照（警告）
  - 未使用ラベル（警告）
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
