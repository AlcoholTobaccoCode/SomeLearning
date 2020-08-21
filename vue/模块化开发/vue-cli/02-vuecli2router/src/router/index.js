// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User' */

// 路由懒加载, 一个懒加载对应一个打包好的 js 文件
const HelloWorld = () => import('@/components/HelloWorld')
const Home = () => import('@/components/Home/Home')
const News = () => import('@/components/Home/News')
const Message = () => import('@/components/Home/Message')
const About = () => import('@/components/About')
const User = () => import('@/components/User')

// 1. 通过 Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2. 创建 VueRouter 对象
const routes = [
  {
    path: '',
    // redirect 重定向
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/news'
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User
  }
]
const router = new VueRouter({
  routes, // 配置路由和组件之间的应用关系
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
