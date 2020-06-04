import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
