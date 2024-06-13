import type ESPree from 'espree'
import { type Parser, importLib } from '..'

export const espree: Parser<typeof ESPree, ESPree.Options> = {
  id: 'espree',
  localLib: ['espree'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
