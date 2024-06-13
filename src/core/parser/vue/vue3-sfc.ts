import type * as Vue3Sfc from '@vue/compiler-sfc'
import type { Parser } from '..'

export const vue3Sfc: Parser<typeof Vue3Sfc, Vue3Sfc.SFCParseOptions> = {
  id: '@vue/compiler-sfc',
  localLib: ['@vue/compiler-sfc'],
  parse(code, options) {
    return this.instance!.parse(code, { ...options })
  },
}
