import type * as Babel from '@babel/parser'
import type { Parser } from '..'

export const babel: Parser<typeof Babel, Babel.ParserOptions> = {
  id: 'babel',
  name: '@babel/parser',
  parse(code) {
    return this.instance!.parse(code, {
      sourceType: 'module',
    })
  },
}
