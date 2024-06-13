import type { QuickPickItem } from 'vscode'
import type { Language } from '../types'
import { css } from './css'
import { html } from './html'
import { javascript } from './javascript'
import { json } from './json'
import { typescript } from './typescript'
import { vue } from './vue'

export interface LanguageOption extends QuickPickItem {
  label: string
  parsers: Parser<any, any>[]
}

export interface Parser<C = unknown, O = unknown> {
  id: string
  name: string
  instance?: C
  downstream?: string[]
  // TODO resolve from remote path
  remoteLib?: string
  parse: (this: Parser<C, O>, code: string, options?: O) => unknown
}

// @keep-sorted
export const parser: Record<Language, LanguageOption> = {
  css,
  html,
  javascript,
  json,
  typescript,
  vue,
}
