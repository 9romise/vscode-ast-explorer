import { resolveModule } from 'local-pkg'
import { window, workspace } from 'vscode'

export async function resolveLocalLib(libs: string[]) {
  const workspaceFolder = workspace.getWorkspaceFolder(window.activeTextEditor!.document.uri)!.uri.fsPath
  for await (const lib of libs) {
    const libPath = resolveModule(lib, { paths: [workspaceFolder] })

    if (!libPath)
      continue

    // import module in cjs
    // eslint-disable-next-line ts/no-require-imports
    return require(libPath)
  }

  throw new Error(`no target libs: ${libs.join(',')}`)
}
