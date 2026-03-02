# @void2610/tyranoscript-lsp

[日本語](README.ja.md)

Language Server for [TyranoScript](https://tyrano.jp/). Used by the [VS Code](https://code.visualstudio.com/) extension [tyranoscript-vscode](https://github.com/void2610/tyranoscript-vscode) and the [Zed](https://zed.dev/) extension [tyranoscript-zed](https://github.com/void2610/tyranoscript-zed).

## Features

- Tag name completion (on `[` or `@` input)
- Parameter completion (already used parameters are excluded)
- Snippet insertion for required parameters
- Hover documentation for tags and parameters
- Automatic workspace indexing for assets, labels, macros, and characters
  - Asset file completion for `storage=""`
  - Label completion (`*xxx`) for `target=""`
  - User-defined macro completion and hover documentation
- Go to Definition
  - `target="*xxx"` → jump to label definition
  - `storage="xxx.ks"` → jump to file
  - `[mymacro]` / `@mymacro` → jump to macro definition
  - `[chara_show name="xxx"]` → jump to `[chara_new name="xxx"]` definition
- Find References — list all usages of labels, macros, and characters
- Diagnostics (checks the entire project, including unopened files)
  - Missing required parameters (error)
  - Missing file references (warning): `storage`, `graphic`, `enterimg`, `leaveimg`, `clickimg`
  - Undefined tag/macro (warning)
  - Undefined label references (warning)
  - Unused labels (warning)
  - Undefined character references (warning): `name` in `chara_show`/`chara_hide` etc. not defined by `chara_new`
  - Unused characters (warning): `chara_new` defined but never referenced
  - Skips JS code inside `[iscript]...[endscript]`
  - Resolves relative paths containing `../`
  - Skips variable expansion prefixes (`&`, `%`, `[`)

### Suppressing Warnings

You can suppress specific warnings using comment directives:

```
; tyranoscript-disable-next-line              ← suppress next line entirely
; tyranoscript-disable-next-line tyrano-unused-label  ← suppress specific code only
[jump target="*unused"] ; tyranoscript-disable-line   ← suppress current line
; tyranoscript-disable                        ← start of suppressed range
...
; tyranoscript-enable                         ← end of suppressed range
```

## Development

```bash
npm install
npm run build    # bundle to dist/server.js
npm run watch    # watch mode
```

## Acknowledgements

Tag dictionary data is based on `tyrano.Tooltip.json` from [orukRed/tyranosyntax](https://github.com/orukRed/tyranosyntax).

## License

[MIT](LICENSE)
