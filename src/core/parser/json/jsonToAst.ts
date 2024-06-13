import type parse from 'json-to-ast'
import type { Parser } from '..'

export const jsonToAst: Parser<typeof parse, parse.Options> = {
  id: 'json-to-ast',
  name: 'json-to-ast',
  parse(code) {
    return this.instance!(code, {
      loc: false,
    })
  },
}
