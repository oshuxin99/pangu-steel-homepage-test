// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      title: '盘古钢铁 · 工业钢材制造'
    }
  }
})
