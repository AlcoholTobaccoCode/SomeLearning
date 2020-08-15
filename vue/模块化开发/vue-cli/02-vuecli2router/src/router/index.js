// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'

// 1. 通过 Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2. 创建 VueRouter 对象
const routes = [
  {
    path: '',
    // redirect 重定向
    redirect: '/home'
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  routes, // 配置路由和组件之间的应用关系
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
