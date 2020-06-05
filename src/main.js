import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import './assets/styles/index.less'
import './assets/iconfont/icon.css'
// import './assets/svgs'

// 多语言
import i18n from './lang'

// import { generateTitle } from './utils/i18n'

// 引入自动注册全局组件文件
import './components'
import http from './utils/request'
// 挂载请求方法
Vue.prototype.$http = http

Vue.use(elementUI, {
  size: 'medium', // 设置 element-ui 默认size
  i18n: (key, value) => i18n.t(key, value)
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // generateTitle(to.meta.title)
  const userInfo = localStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next()
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
