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

import { setTitile } from './utils/util'

// 引入自动注册全局组件文件
import './components'
import http from './utils/request'
// 挂载请求方法
Vue.prototype.$http = http

Vue.use(elementUI)

// 路由守卫
router.beforeEach((to, from, next) => {
  setTitile(to.meta.title)
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
  render: h => h(App)
}).$mount('#app')
