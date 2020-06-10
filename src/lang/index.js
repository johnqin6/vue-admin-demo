import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'
import { getStore } from '@/utils/store'

Vue.use(VueI18n)

const messages = {
  en: {
    ...elementEnLocale,
    ...en
  },
  zh: {
    ...elementZhLocale,
    ...zh
  }
}

const i18n = new VueI18n({
  locale: getStore('language') || 'zh',
  messages
})

export default i18n
