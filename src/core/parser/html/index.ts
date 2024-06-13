import type { LanguageOption } from '..'
import { htmlparser2 } from './htmlparser2'

export const html: LanguageOption = {
  label: 'html',
  parsers: [htmlparser2],
}
