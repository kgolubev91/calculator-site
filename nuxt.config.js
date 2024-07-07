export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/i18n.js'
  ],
  routeRules: {
    '/**': { middleware: 'i18n' }
  },
  generate: {
    routes: ['/en', '/ru', '/lv']
  },
  // Other configurations...
})