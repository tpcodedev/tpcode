import { createI18n } from 'vue-i18n'
import pt from '../locales/pt.json'
import en from '../locales/en.json'


export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'pt',
    globalInjection: true,
    messages: { pt, en }
  })

  vueApp.use(i18n)
})

