import { defineConfig } from 'tsup'

/// keep-sorted
export default defineConfig({
  bundle: true,
  clean: true,
  entry: ['src/extension.ts'],
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  sourcemap: true,
  target: 'node16',
})
