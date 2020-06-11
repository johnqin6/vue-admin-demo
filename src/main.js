import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './assets/styles/index.less'
import './assets/iconfont/icon.css'
import './mock'
// 路由守护
import './permission'
import './errorLog' // 错误日志

// 多语言
import i18n from './lang'
import { global } from '@/global/global'

// import { generateTitle } from './utils/i18n'

// 引入自动注册全局组件文件
import './components'
import './assets/icons'
import http from './utils/request'
// 挂载请求方法
Vue.prototype.$http = http

Vue.use(elementUI, { locale })
Vue.use(elementUI, {
  size: 'medium', // 设置 element-ui 默认size
  i18n: (key, value) => i18n.t(key, value)
})

// 加载用户主题
if (localStorage.getItem('themeValue')) {
  global.changeTheme(localStorage.getItem('themeValue'))
} else {
  global.changeTheme('default')
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
