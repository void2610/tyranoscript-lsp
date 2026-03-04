# @void2610/tyranoscript-lsp

[日本語](README.ja.md)

Language Server for [TyranoScript](https://tyrano.jp/). Used by the [VS Code](https://code.visualstudio.com/) extension [tyranoscript-vscode](https://github.com/void2610/tyranoscript-vscode) and the [Zed](https://zed.dev/) extension [tyranoscript-zed](https://github.com/void2610/tyranoscript-zed).

## Features

- Tag name completion (on `[` or `@` input)
- Parameter completion (already used parameters are excluded)
- Snippet insertion for required parameters
- Hover documentation for tags and parameters
- Automatic workspace indexing for assets, labels, macros, and characters
  - Indexes `tf.xxx` variable definitions and references
  - Asset file completion for `storage=""`
  - Label completion (`*xxx`) for `target=""`
  - User-defined macro completion and hover documentation
  - Hover descriptions from comments immediately above label definitions
- Go to Definition
  - `target="*xxx"` → jump to label definition
  - `nextOrderWithLabel("*xxx", "file.ks")` → jump to label definition
  - `storage="xxx.ks"` → jump to file
  - `[mymacro]` / `@mymacro` → jump to macro definition
  - `tf.xxx` → jump to the assignment site
  - `[chara_show name="xxx"]` → jump to `[chara_new name="xxx"]` definition
  - `face=` in `[chara_mod name="akane" face="smile"]` → jump to `[chara_face]` definition
  - `ptext=` in `[chara_config]` / `use=` in `[glyph]` → jump to `[ptext]` / `[image]` definition
- Find References — list all usages of labels, JS label calls, macros, `tf.xxx`, characters, faces, and named elements

### Macro And Label Description Comments

Comments immediately above macro and label definitions are shown in hover.

Recommended format:

```ks
; Calls the target file and injects tf.kw_list / kw_key / judge_table
; Params: storage - path to the data file
[macro name="load_keyword_data"]

; Renders keyword buttons from tf.kw_list and enters click wait
; Returns after on_complete_click finishes
*show_report_ui
```

Descriptions can be plain comment lines without a field label. `Params:` lines and description lines are treated separately.
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
