import type Typescript from 'typescript'
import { type Parser, importLib } from '..'

export const ts: Parser<typeof Typescript, Typescript.CreateSourceFileOptions> = {
  id: 'typescript',
  localLib: ['typescript'],
  async init() {
    return await importLib(this.localLib)
  },
  parse(code, options) {
    return this.createSourceFile('', code, {
      languageVersion: this.ScriptTarget.Latest,
      ...options,
    })
  },
}
