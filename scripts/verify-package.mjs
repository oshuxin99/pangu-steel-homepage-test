import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { build, createServer } from 'vite'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const outputDirectory = await mkdtemp(
  join(tmpdir(), 'pangu-steel-homepage-consumer-')
)

async function findCssFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name)

    return entry.isDirectory()
      ? findCssFiles(path)
      : entry.name.endsWith('.css')
        ? [path]
        : []
  }))

  return files.flat()
}

try {
  const server = await createServer({
    root: projectRoot,
    configFile: false,
    logLevel: 'silent',
    appType: 'custom',
    server: {
      middlewareMode: true
    }
  })

  try {
    const { default: PanguSteelHomepage } = await server.ssrLoadModule(
      '/dist/index.js'
    )
    const renderComponent = props => renderToString(createSSRApp({
      render: () => h(PanguSteelHomepage, props)
    }))
    const defaultHtml = await renderComponent({})
    const customHtml = await renderComponent({
      classPrefix: 'acme-steel',
      productsId: 'steel-products'
    })

    if (
      !defaultHtml.includes('pangu-steel-homepage')
      || !customHtml.includes('acme-steel-homepage')
      || !customHtml.includes('acme-steel-button--solid')
    ) {
      throw new Error('The configurable class prefix was not rendered.')
    }
  } finally {
    await server.close()
  }

  await build({
    root: projectRoot,
    configFile: false,
    logLevel: 'warn',
    plugins: [
      {
        name: 'consumer-entry',
        resolveId(source) {
          return source === 'virtual:consumer'
            ? '\0virtual:consumer'
            : undefined
        },
        load(id) {
          if (id !== '\0virtual:consumer') {
            return undefined
          }

          return [
            "import { PanguSteelHomepage } from 'pangu-steel-homepage-test'",
            'console.log(PanguSteelHomepage)'
          ].join('\n')
        }
      }
    ],
    build: {
      outDir: outputDirectory,
      emptyOutDir: true,
      rollupOptions: {
        input: 'virtual:consumer'
      }
    }
  })

  const cssFiles = await findCssFiles(outputDirectory)
  const styles = await Promise.all(cssFiles.map(file => readFile(file, 'utf8')))

  if (!styles.some(style => style.includes('_homepage_'))) {
    throw new Error('Component styles were not bundled automatically.')
  }

  console.log('Component styles and public class prefixes are verified.')
} finally {
  await rm(outputDirectory, { recursive: true, force: true })
}
