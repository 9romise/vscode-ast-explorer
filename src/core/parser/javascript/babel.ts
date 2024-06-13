import type * as Babel from '@babel/parser'
import { type Parser, importLib } from '..'

export const babel: Parser<typeof Babel, Babel.ParserOptions> = {
  id: 'babel',
  localLib: ['@babel/parser'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
