import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { addComponent, defineNuxtModule } from '@nuxt/kit'

const packageDirectory = dirname(fileURLToPath(import.meta.url))

export interface ModuleOptions {
  componentName?: string
  global?: boolean
}

export const panguSteelHomepageModule = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'pangu-steel-homepage',
    configKey: 'panguSteelHomepage'
  },
  defaults: {
    componentName: 'PanguSteelHomepage',
    global: false
  },
  setup(options) {
    addComponent({
      name: options.componentName!,
      filePath: join(packageDirectory, 'index.js'),
      declarationPath: join(packageDirectory, 'index.d.ts'),
      export: 'PanguSteelHomepage',
      global: options.global
    })
  }
})

export default panguSteelHomepageModule
