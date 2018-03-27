import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('components/index/index')
    },
    {
      path: '/modify-password',
      name: 'modify-password',
      component: () => import('components/modify-password/modify-password')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('components/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('components/register/register')
    },
    {
      path: '/retrieve-password',
      name: 'retrieve-password',
      component: () => import('components/retrieve-password/retrieve-password')
    },
    {
      path: '/score-record',
      name: 'score-record',
      component: () => import('components/score-record/score-record')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('components/order/order'),
      children: [
        {
          path: ':id',
          component: () => import('components/order/order')
        }
      ]
    }
  ]
})
