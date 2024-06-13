import { Uri, ViewColumn, window, workspace } from 'vscode'
import type { Language } from './types'
import type { Parser } from './parser'

export async function compile(uri: Uri) {
  await window.showTextDocument(Uri.parse(uri.toString()), {
    viewColumn: ViewColumn.One,
  })

  const activeDocument = window.activeTextEditor!.document
  const language = activeDocument.languageId as Language

  return language
}

async function resolveParser(parser: Parser) {
  if (parser.instance)
    return

  const { name, downstream = [] } = parser

  const workspaceFolder = workspace.getWorkspaceFolder(window.activeTextEditor!.document.uri)!.uri.fsPath
  const paths = [
    workspaceFolder,
    ...downstream.map((d) => require.resolve(d, { paths: [workspaceFolder] })),
  ]

  const libPath = require.resolve(name, { paths })

  if (!libPath)
    throw new Error(`Cannot resolve ${name}`)

  // import module in cjs
  // eslint-disable-next-line ts/no-require-imports
  parser.instance = require(libPath)
}

export async function doParse(parser: Parser) {
  const activeDocument = window.activeTextEditor!.document

  try {
    resolveParser(parser)

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
    window.showErrorMessage(`${err}`)
    throw err
  }
}
