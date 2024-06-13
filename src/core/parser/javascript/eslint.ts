import type ESPree from 'espree'
import type { Parser } from '..'

export const espree: Parser<typeof ESPree, ESPree.Options> = {
  id: 'espree',
  localLib: ['espree'],
  parse(code, options) {
    return this.instance!.parse(code, { ...options })
  },
}
