import type * as Htmlparser2 from 'htmlparser2'
import type { Parser } from '..'

export const htmlparser2: Parser<typeof Htmlparser2, Htmlparser2.Options> = {
  id: 'htmlparser2',
  localLib: ['htmlparser2'],
  parse(code, options) {
    return this.instance!.parseDocument(code, { ...options })
  },
}
