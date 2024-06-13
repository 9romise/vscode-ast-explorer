import type ESPree from 'espree'
import type { Parser } from '..'

export const espree: Parser<typeof ESPree, ESPree.Options> = {
  id: 'espree',
  name: 'espree',
  downstream: ['eslint'],
  parse(code) {
    return this.instance!.parse(code, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      loc: true,
    })
  },
}
