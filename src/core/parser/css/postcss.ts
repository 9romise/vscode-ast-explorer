import type Postcss from 'postcss'
import type { Parser } from '..'

export const postcss: Parser<typeof Postcss, Postcss.ProcessOptions> = {
  id: 'postcss',
  name: 'postcss',
  parse(code) {
    return this.instance!.parse(code)
  },
}
