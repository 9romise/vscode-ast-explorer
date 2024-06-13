import type * as TS from '@typescript-eslint/parser'
import type { Parser } from '..'

export const tsEslint: Parser<typeof TS, TS.ParserOptions> = {
  id: 'typescript-eslint',
  localLib: ['@typescript-eslint/parser'],
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
