import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission' // 菜单路由相关
import app from './modules/app'
import common from './modules/common'
import user from './modules/user'
import fullScreen from './modules/fullScreen'
import errorLog from './modules/errorLog'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    permission,
    common,
    app,
    user,
    fullScreen,
    errorLog
  },
  getters
})
