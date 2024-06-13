import type * as Vue3Sfc from '@vue/compiler-sfc'
import { type Parser, importLib } from '..'

export const vue3Sfc: Parser<typeof Vue3Sfc, Vue3Sfc.SFCParseOptions> = {
  id: '@vue/compiler-sfc',
  localLib: [
    '@vue/compiler-sfc',
    'vue/compiler-sfc',
  ],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
