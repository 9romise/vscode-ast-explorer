import type * as Htmlparser2 from 'htmlparser2'
import { type Parser, importLib } from '..'

export const htmlparser2: Parser<typeof Htmlparser2, Htmlparser2.Options> = {
  id: 'htmlparser2',
  localLib: ['htmlparser2'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parseDocument(code, { ...options })
  },
}
