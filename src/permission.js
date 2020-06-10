// 路由守护
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress 进度条（浏览器导航栏底部进度条）
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 得到token
import { setTitle } from '@/utils/util' // 设置浏览器头部标题
// import { generateTitle } from '@/utils/i18n'

/**
 * 验证权限是否许可进入
 * @param {*} roles
 * @param {*} permissonRoles
 */
function hasPermission (roles, permissonRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissonRoles) return true
  return roles.some(role => permissonRoles.indexOf(role) >= 0)
}
const whiteList = ['/login'] // 不重定向白名单
// 路由守护
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    // 设置浏览器头部标题
    const browserHeaderTitle = to.name
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })

    // 锁屏
    if (store.getters.isLock && to.path !== '/lock') {
      next({ path: '/lock' })
      NProgress.done()
    } else if (to.path === '/login') { // 登录页面进入
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 获取用户信息
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.roles
          // 根据roles权限生成可访问的路由表
          console.log(to)
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: { noGoBack: true }
          })
        }
      }
    }
  } else {
    // 设置浏览器头部标题
    const browserHeaderTitle = to.name
    store.commit('SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
