import type * as Vue3Sfc from '@vue/compiler-sfc'
import type { Parser } from '..'

export const vue3Sfc: Parser<typeof Vue3Sfc, Vue3Sfc.SFCParseOptions> = {
  id: '@vue/compiler-sfc',
  name: '@vue/compiler-sfc',
  downstream: ['vue'],
  parse(code) {
    return this.instance!.parse(code)
  },
}
