import type Postcss from 'postcss'
import type { Parser } from '..'

export const postcss: Parser<typeof Postcss, Postcss.ProcessOptions> = {
  id: 'css-tree',
  localLib: ['css-tree'],
  parse(code, options) {
    return this.instance!.parse(code, { ...options })
  },
}
