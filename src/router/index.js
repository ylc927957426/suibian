import Vue from 'vue'
import Router from 'vue-router'
import yaowen from '../pages/yaowen'
import tuijian from '../pages/tuijian'
import yuanchuang from '../pages/yuanchuang'
import ucdetail from '../pages/details'
import login from '../pages/login'
import reg from '../pages/reg'
import user from '../pages/user'
import fangwen from '../pages/fangwen'
import hot from '../pages/hot'

Vue.use(Router)
// eslint-disable-next-line no-new
export default new Router({
  // 设置滚动条回顶部
  scrollBehavior (to, from, savedPosition) {
    // let x = 0
    // let y = 0
    return { x: 0, y: 0 }
  },
  method: 'history',
  routes: [
    {path: '/yaowen', component: yaowen},
    {path: '/tuijian', component: tuijian},
    {path: '/yuanchuang', component: yuanchuang},
    {path: '/detail', component: ucdetail, name: 'detail'},
    {path: '/fangwen', component: fangwen, name: 'fangwen'},
    {path: '/login', component: login},
    {path: '/hot', component: hot},
    {path: '/reg', component: reg},
    {path: '/user',
      component: user
      // beforeEnter: (to, from, next) => { // 路由独享守卫 前置
      //   console.log('路由独享守卫')
      //   console.log(window.localStorage.getItem('user'))
      //   if (!window.localStorage.getItem('user')) {
      //     next('/user')
      //   } else {
      //     next('/login')
      //   }
      // }

    },
    // {path: '/detail?id', component: ucdetail},
    {path: '/', component: yaowen, redirect: '/yaowen'}
  ]
})

// 4.路由实例
