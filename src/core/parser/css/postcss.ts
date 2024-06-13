import type Postcss from 'postcss'
import { type Parser, importLib } from '..'

export const postcss: Parser<typeof Postcss, Postcss.ProcessOptions> = {
  id: 'css-tree',
  localLib: ['css-tree'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.parse(code, { ...options })
  },
}
