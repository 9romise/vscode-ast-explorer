import type { LanguageOption } from '..'
import { babel } from '../javascript/babel'
import { tsEslint } from './eslint'
import { ts } from './typescript'

export const typescript: LanguageOption = {
  label: 'typescript',
  parsers: [ts, tsEslint, babel],
}
