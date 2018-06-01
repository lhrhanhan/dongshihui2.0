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
import newShopping from '@/components/newShopping/index'
import productList from '@/components/thirdHtml/index'
import productDetail from '@/components/productDetail/index'
import cataList from '@/components/cataThirdHtml/index'
import notice from '@/components/notice/index'
import userCenter from '@/components/login/loginAgain'
import shoppingCar from '@/components/productDetail/shoppingCar'
import search from '@/components/search/index'
import searchThird from '@/components/searchThirdHtml/index'
import userTalk from '@/components/productDetail/userTalk'

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
    },
    {
      path: '/newShopping',
      name: 'newShopping',
      component: newShopping
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/cataList',
      name: 'cataList',
      component: cataList
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchThird',
      name: 'searchThird',
      component: searchThird
    },
    {
      path: '/userTalk',
      name: 'userTalk',
      component: userTalk
    }
  ]
})
