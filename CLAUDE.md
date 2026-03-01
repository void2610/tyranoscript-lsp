# tyranoscript-lsp 開発ガイド

## ビルド

```bash
npm install       # 初回のみ
npm run build     # dist/server.js にバンドル
npm run watch     # ファイル変更時に自動ビルド
```

## Zed でのローカル動作確認

ビルド後、Zed 拡張にコピーして言語サーバーを再起動する。

```bash
npm run build
cp dist/server.js "/Users/shuya/Library/Application Support/Zed/extensions/work/tyranoscript/node_modules/@void2610/tyranoscript-lsp/dist/server.js"
```

Zed でコマンドパレットを開き `language server: restart` を実行。

## npm publish

```bash
npm version patch   # バージョンを上げる（patch / minor / major）
npm publish --access public
```

`~/.npmrc` に Automation トークンが設定済みのため OTP 不要。
