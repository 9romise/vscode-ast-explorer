import type Typescript from 'typescript'
import type { Parser } from '..'

export const ts: Parser<typeof Typescript, Typescript.CreateSourceFileOptions> = {
  id: 'typescript',
  name: 'typescript',
  parse(code) {
    const { createSourceFile, ScriptTarget } = this.instance!
    return createSourceFile('', code, {
      languageVersion: ScriptTarget.Latest,
    })
  },
}
