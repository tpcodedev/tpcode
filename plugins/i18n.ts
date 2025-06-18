import { createI18n } from 'vue-i18n'
import pt from '../locales/pt.json'
import en from '../locales/en.json'


export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    globalInjection: true,
    messages: { pt, en }
  })

  nuxtApp.vueApp.use(i18n)
})