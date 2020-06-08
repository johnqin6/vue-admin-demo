import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index'),
    meta: {
      title: '登录'
    },
    hidden: true
  },
  // 锁屏
  {
    path: '/lock',
    hidden: true,
    name: '锁屏页',
    component: () => import('@/views/commons/Lock')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  {
    path: '/dashboard',
    component: Layout,
    icon: 'icon-shouye',
    prefix: 'iconfont',
    meta: {
      title: 'dashboard'
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard'),
        icon: 'icon-shouye',
        prefix: 'iconfont',
        meta: {
          title: 'dashboard'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

export const asyncRouterMap = []
