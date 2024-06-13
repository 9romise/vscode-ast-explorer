import { defineConfig } from 'tsup'
import pkgJson from './package.json'

/// keep-sorted
export default defineConfig({
  bundle: true,
  clean: true,
  entry: ['src/extension.ts'],
  external: ['vscode'],
  format: 'cjs',
  noExternal: Object.keys(pkgJson.dependencies),
  platform: 'node',
  sourcemap: true,
  target: 'node16',
})
