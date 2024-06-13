import { window } from 'vscode'
import { compile, doParse } from '../core/parse'
import { getDefaultParser } from '../core/state'
import { parser } from '../core/parser'

export async function parse(uri = window.activeTextEditor!.document.uri) {
  const language = await compile(uri)

  const defaultParser = parser[language].parsers.find(({ id }) => getDefaultParser(language) === id)!
  doParse(defaultParser)
}
