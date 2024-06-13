import type parse from 'json-to-ast'
import type { Parser } from '..'

export const jsonToAst: Parser<typeof parse, parse.Options> = {
  id: 'json-to-ast',
  localLib: ['json-to-ast'],
  parse(code, options) {
    return this.instance!(code, { ...options })
  },
}
