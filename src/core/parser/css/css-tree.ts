import type CssTree from 'css-tree'
import { type Parser, importLib } from '..'

export const cssTree: Parser<typeof CssTree, CssTree.ParseOptions> = {
  id: 'css-tree',
  localLib: ['css-tree'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
