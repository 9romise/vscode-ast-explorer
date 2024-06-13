import * as vscode from 'vscode'
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

export function activate(context: vscode.ExtensionContext) {
  ctx.ext = context

  vscode.commands.executeCommand<string[]>('setContext', `${PREFIX}.supportedLanguages`, supportedLanguages)

  // commands
  context.subscriptions.push(
    vscode.commands.registerCommand(`${PREFIX}.parse`, parse),
    vscode.commands.registerCommand(`${PREFIX}.parseWith`, parseWith),
  )
}

export function deactivate() {

}
