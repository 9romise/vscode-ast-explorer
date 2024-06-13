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
  initial?: boolean
  localLib: string[]
  remoteLib?: string
  init: () => Promise<C>
  parse: (this: C, code: string, options?: O) => unknown
}

export async function importLib(libs: string[]) {
  for await (const lib of libs) {
    try {
      return (await import(lib)).default
    } catch (e) {
      continue
    }
  }
  throw new Error('import lib error')
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
