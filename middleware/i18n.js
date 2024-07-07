export default defineNuxtRouteMiddleware((to, from) => {
  const { $i18n } = useNuxtApp()
  const defaultLocale = 'en'
  const locales = ['en', 'ru', 'lv']
  
  // Check if the URL starts with a locale code
  const pathMatch = to.path.match(/^\/([a-z]{2})(.*)/)
  if (pathMatch) {
    const urlLocale = pathMatch[1]
    const path = pathMatch[2] || '/'
    
    // If the locale in the URL is valid, update it
    if (locales.includes(urlLocale)) {
      $i18n.locale.value = urlLocale
    } else {
      // If invalid locale, redirect to the same path with default locale
      return navigateTo(`/${defaultLocale}${path}`, { redirectCode: 301 })
    }
  } else {
    // If no locale in the URL, add the default locale
    return navigateTo(`/${defaultLocale}${to.fullPath}`, { redirectCode: 301 })
  }
})