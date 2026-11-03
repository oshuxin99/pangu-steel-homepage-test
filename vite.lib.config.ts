import { copyFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const typesSource = fileURLToPath(new URL('./index.d.ts', import.meta.url))
const typesOutput = fileURLToPath(new URL('./dist/index.d.ts', import.meta.url))

export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    {
      name: 'copy-component-types',
      closeBundle() {
        copyFileSync(typesSource, typesOutput)
      }
    }
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    lib: {
      entry: fileURLToPath(new URL('./index.ts', import.meta.url)),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: 'style.css'
      }
    }
  }
})
