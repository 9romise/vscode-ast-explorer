import type { LanguageOption } from '..'
import { cssTree } from './css-tree'
import { postcss } from './postcss'

export const css: LanguageOption = {
  label: 'css',
  parsers: [cssTree, postcss],
}
