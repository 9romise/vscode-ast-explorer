import type * as TS from '@typescript-eslint/parser'
import type { Parser } from '..'

export const tsEslint: Parser<typeof TS, TS.ParserOptions> = {
  id: 'typescript-eslint',
  name: '@typescript-eslint/parser',
  parse(code) {
    return this.parse(code, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      range: true,
    })
  },
}
