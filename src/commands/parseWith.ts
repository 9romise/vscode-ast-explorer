import type { QuickPickItem } from 'vscode'
import { QuickPickItemKind, window } from 'vscode'
import { compile, doParse } from '../core/parse'
import { getDefaultParser, setDefaultParser } from '../core/state'
import type { Parser } from '../core/parser'
import { parser } from '../core/parser'

export async function parseWith(uri = window.activeTextEditor!.document.uri) {
  const language = await compile(uri)
  const { parsers } = parser[language]

  const defaultParserId = getDefaultParser(language)

  const options: ({ parser?: Parser } & QuickPickItem)[] = parsers.map((p) => ({
    label: p.id,
    parser: p,
    description: defaultParserId === p.id ? '(default)' : '',
  }))

  const selectedOpt = await window.showQuickPick([
    ...options,
    { label: '', kind: QuickPickItemKind.Separator },
    { label: 'Configure Default Parser...' },
  ], {
    placeHolder: 'Select a parser',
  })

  if (!selectedOpt)
    return

  if (selectedOpt.parser) {
    doParse(selectedOpt.parser)
  } else {
    const selectedDefaultOpt = await window.showQuickPick(options, {
      placeHolder: `Select a default parser for '${language}' files`,
    })

    if (!selectedDefaultOpt || !selectedDefaultOpt.parser)
      return

    doParse(selectedDefaultOpt.parser).then(() => {
      setDefaultParser(language, selectedDefaultOpt.parser!.id)
    })
  }
}
