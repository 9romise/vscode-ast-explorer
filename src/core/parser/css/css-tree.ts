import type CssTree from 'css-tree'
import type { Parser } from '..'

export const cssTree: Parser<typeof CssTree, CssTree.ParseOptions> = {
  id: 'css-tree',
  name: 'css-tree',
  parse(code) {
    return this.instance!.parse(code, {
      positions: true,
    })
  },
}
