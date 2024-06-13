import type { LanguageOption } from '..'
import { vue3Sfc } from './vue3-sfc'

export const vue: LanguageOption = {
  label: 'Vue',
  parsers: [vue3Sfc],
}
