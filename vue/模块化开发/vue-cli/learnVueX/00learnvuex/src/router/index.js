import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosRequest from '@/components/AxiosRequest'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    mode: 'history',
    component: HelloWorld
  }, {
    path: '/axios',
    name: 'AxiosRequest',
    mode: 'history',
    components: AxiosRequest
  }]
})
