import type * as TS from '@typescript-eslint/parser'
import { type Parser, importLib } from '..'

export const tsEslint: Parser<typeof TS, TS.ParserOptions> = {
  id: 'typescript-eslint',
  localLib: ['@typescript-eslint/parser'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
