import type { LanguageOption } from '..'
import { espree } from './eslint'

export const javascript: LanguageOption = {
  label: 'javascript',
  parsers: [espree],
}
