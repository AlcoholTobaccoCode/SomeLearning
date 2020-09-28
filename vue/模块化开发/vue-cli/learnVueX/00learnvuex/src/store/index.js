import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({ //* 里面的值是固定的
  state: { //* 状态
    counter: 1000
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 3. 导出
export default store