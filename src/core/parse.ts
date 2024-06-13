import * as vscode from 'vscode'
import type { Language } from './types'
import type { Parser } from './parser'

export async function compile(uri: vscode.Uri) {
  await vscode.window.showTextDocument(vscode.Uri.parse(uri.toString()), {
    viewColumn: vscode.ViewColumn.One,
  })

  const activeDocument = vscode.window.activeTextEditor!.document
  const language = activeDocument.languageId as Language

  return language
}

export async function doParse(parser: Parser) {
  const activeDocument = vscode.window.activeTextEditor!.document

  try {
    if (!parser.initial) {
      Object.assign(parser, await parser.init(), { initial: true })
    }

    const code = activeDocument.getText()
    const ast = parser.parse(code)

    const config = vscode.workspace.getConfiguration('editor', activeDocument)
    const tabSize = config.get<number>('tabSize') || 2

    const doc = await vscode.workspace.openTextDocument({
      content: JSON.stringify(ast, null, tabSize),
      language: 'json',
    })
    vscode.window.showTextDocument(doc, {
      viewColumn: vscode.ViewColumn.Two,
    })
  } catch (err) {
    vscode.window.showErrorMessage(`parse with ${parser.id} error! ${err}`)
    throw err
  }
}
