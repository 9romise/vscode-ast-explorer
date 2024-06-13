import type { LanguageOption } from '..'
import { jsonToAst } from './jsonToAst'

export const json: LanguageOption = {
  label: 'JSON',
  parsers: [jsonToAst],
}
