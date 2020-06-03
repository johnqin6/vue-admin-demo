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

// 引入自动注册全局组件文件
import './components'

Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
