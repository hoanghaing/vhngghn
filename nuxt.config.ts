// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // Ví dụ nếu link là hoanghaing.github.io/my-countdown thì ghi '/my-countdown/'
    baseURL: '/vhngghn/', 
    buildAssetsDir: 'assets', // Mặc định là _nuxt, giữ nguyên
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