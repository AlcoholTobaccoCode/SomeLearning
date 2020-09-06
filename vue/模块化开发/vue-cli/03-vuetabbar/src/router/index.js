import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home/Home') // 首页
const Category = () => import('@/views/Category/Category') // 分类
const ShoppingCart = () => import('@/views/ShoppingCart/ShoppingCart') // 购物车
const Mine = () => import('@/views/Mine/Mine') // 我的

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/shoppingcart',
    component: ShoppingCart
  }, {
    path: '/mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 3. 导出 router
export default router
