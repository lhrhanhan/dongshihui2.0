import Vue from 'vue'
import Router from 'vue-router'
import bottom from '@/components/index/bottom'
import login from '@/components/login/login'
import reg from '@/components/login/register'
import resetPwd from '@/components/login/forgetPassword'
import index from '@/components/index/index'
import nav from '@/components/index/nav'
import catagory from '@/components/cata/index'
import discover from '@/components/discover/index'
import secondHtml from '@/components/secondHtml/index'
import bigShopping from '@/components/bigShopping/index'

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
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/catagory',
      name: 'catagory',
      component: catagory
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/secondHtml',
      name: 'secondHtml',
      component: secondHtml
    },
    {
      path: '/bigShopping',
      name: 'bigShopping',
      component: bigShopping
    }
  ]
})
