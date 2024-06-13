import { Uri, ViewColumn, window, workspace } from 'vscode'
import type { Language } from './types'
import type { Parser } from './parser'
import { resolveLocalLib } from './resolver'

export async function compile(uri: Uri) {
  await window.showTextDocument(Uri.parse(uri.toString()), {
    viewColumn: ViewColumn.One,
  })

  const activeDocument = window.activeTextEditor!.document
  const language = activeDocument.languageId as Language

  return language
}

export async function doParse(parser: Parser) {
  const activeDocument = window.activeTextEditor!.document

  try {
    if (!parser.instance) {
      parser.instance = await resolveLocalLib(parser.localLib)
    }

    const code = activeDocument.getText()
    const ast = parser.parse(code)

    const config = workspace.getConfiguration('editor', activeDocument)
    const tabSize = config.get<number>('tabSize') || 2

    const doc = await workspace.openTextDocument({
      content: JSON.stringify(ast, null, tabSize),
      language: 'json',
    })
    window.showTextDocument(doc, {
      viewColumn: ViewColumn.Two,
    })
  } catch (err) {
    window.showErrorMessage(`parse error: ${err}`)
    throw err
  }
}
