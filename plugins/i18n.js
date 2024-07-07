import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(async ({ vueApp }) => {
  const messages = {
    en: await import('../locales/en.json').then(m => m.default || m),
    ru: await import('../locales/ru.json').then(m => m.default || m),
    lv: await import('../locales/lv.json').then(m => m.default || m),
  }

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true,
    missingWarn: false,
    fallbackWarn: false
  })

  vueApp.use(i18n)

  return {
    provide: {
      i18n: i18n.global
    }
  }
})