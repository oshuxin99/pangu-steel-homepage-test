import { copyFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const typesSource = fileURLToPath(new URL('./index.d.ts', import.meta.url))
const typesOutput = fileURLToPath(new URL('./dist/index.d.ts', import.meta.url))
const moduleTypesSource = fileURLToPath(new URL('./nuxt.d.ts', import.meta.url))
const moduleTypesOutput = fileURLToPath(new URL('./dist/nuxt.d.ts', import.meta.url))

export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    {
      name: 'inject-component-styles',
      generateBundle(_options, bundle) {
        const entry = Object.values(bundle).find(
          output => output.type === 'chunk'
            && output.isEntry
            && output.name === 'index'
        )

        if (!entry) {
          this.error('Unable to find the component entry chunk.')
        }

        entry.code = `import './style.css';\n${entry.code}`
      }
    },
    {
      name: 'copy-package-types',
      closeBundle() {
        copyFileSync(typesSource, typesOutput)
        copyFileSync(moduleTypesSource, moduleTypesOutput)
      }
    }
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    lib: {
      entry: {
        index: fileURLToPath(new URL('./index.ts', import.meta.url)),
        nuxt: fileURLToPath(new URL('./nuxt.ts', import.meta.url))
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit', 'node:path', 'node:url'],
      output: {
        assetFileNames: 'style.css'
      }
    }
  }
})
