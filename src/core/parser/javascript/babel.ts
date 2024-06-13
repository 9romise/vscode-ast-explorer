import type * as Babel from '@babel/parser'
import type { Parser } from '..'

export const babel: Parser<typeof Babel, Babel.ParserOptions> = {
  id: 'babel',
  localLib: ['@babel/parser'],
  parse(code, options) {
    return this.instance!.parse(code, { ...options })
  },
}
