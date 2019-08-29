import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Home from '@/views/home'
import Friends from '@/views/friends'
import Cart from '@/views/cart'
import Search from '@/views/search'
import Newslist from '@/views/home/news/newslist'
import Newsinfo from '@/views/home/news/newsinfo'
import PhotoList from '@/views/home/photos/photolist'
import PhotoInfo from '@/views/home/photos/photoinfo'
import GoodsList from '@/views/home/goods/goodslist'
import GoodsInfo from '@/views/home/goods/goodsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: Newslist
    },
    {
      path: '/home/newsinfo/:id',
      component: Newsinfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodsInfo
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
