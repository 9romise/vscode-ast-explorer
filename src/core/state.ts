import type { ExtensionContext } from 'vscode'
import type { Language } from './types'
import { type Parser, parser } from './parser'

interface Context {
  ext: ExtensionContext
}

export const ctx = {
} as Context

const DEFAULT_PARSER_KEY = 'defaultParser'
type DefaultParser = Partial<Record<Language, Parser['id']>>

export const getDefaultParser = (function () {
  let defaultParser: DefaultParser

  return function (language?: Language) {
    if (!defaultParser) {
      defaultParser = ctx.ext.globalState.get<DefaultParser>(DEFAULT_PARSER_KEY, {})
    }
    return language ? (defaultParser[language] ?? parser[language].parsers[0].id) : defaultParser
  }
}())

export function setDefaultParser(language: Language, parserId: Parser['id']) {
  const defaultParser = getDefaultParser() as DefaultParser
  defaultParser[language] = parserId
  ctx.ext.globalState.update(DEFAULT_PARSER_KEY, defaultParser)
}
