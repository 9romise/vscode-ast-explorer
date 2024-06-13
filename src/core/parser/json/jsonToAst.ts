import type parse from 'json-to-ast'
import { type Parser, importLib } from '..'

export const jsonToAst: Parser<typeof parse, parse.Options> = {
  id: 'json-to-ast',
  localLib: ['json-to-ast'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this(code, { ...options })
  },
}
