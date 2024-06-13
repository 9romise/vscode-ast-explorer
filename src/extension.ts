import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { parse } from './commands/parse'
import { parseWith } from './commands/parseWith'
import { ctx } from './core/state'

/// keep-sorted
export const supportedLanguages = [
  'css',
  'html',
  'javascript',
  'json',
  // 'svelte',
  'typescript',
  // 'vue-html',
  'vue',
] as const

const PREFIX = 'ast-explorer'

export function activate(context: ExtensionContext) {
  ctx.ext = context

  commands.executeCommand<string[]>('setContext', `${PREFIX}.supportedLanguages`, supportedLanguages)

  // commands
  context.subscriptions.push(
    commands.registerCommand(`${PREFIX}.parse`, parse),
    commands.registerCommand(`${PREFIX}.parseWith`, parseWith),
  )
}

export function deactivate() {

}
