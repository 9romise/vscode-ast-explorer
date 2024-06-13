import type CssTree from 'css-tree'
import type { Parser } from '..'

export const cssTree: Parser<typeof CssTree, CssTree.ParseOptions> = {
  id: 'css-tree',
  localLib: ['css-tree'],
  parse(code, options) {
    return this.instance!.parse(code, { ...options })
  },
}
