import type Typescript from 'typescript'
import type { Parser } from '..'

export const ts: Parser<typeof Typescript, Typescript.CreateSourceFileOptions> = {
  id: 'typescript',
  localLib: ['typescript'],
  parse(code, options) {
    const { createSourceFile, ScriptTarget } = this.instance!
    return createSourceFile('', code, {
      languageVersion: ScriptTarget.Latest,
      ...options,
    })
  },
}
