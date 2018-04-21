import Vue from 'vue'
import Router from 'vue-router'
import bottom from '@/components/index/bottom'
import login from '@/components/login/login'
import reg from '@/components/login/register'
import resetPwd from '@/components/login/forgetPassword'
import index from '@/components/index/index'
import snowing from '@/components/index/snowing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: reg
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetPwd
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/snowing',
      name: 'snowing',
      component: snowing
    },
  ]
})
