export default defineNuxtConfig({
  app: {
    baseURL: '/vhngghn/', 
    buildAssetsDir: 'assets',
  },
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  colorMode: {
    preference: 'dark'
  },
  css: ['../assets/css/main.css'],
})