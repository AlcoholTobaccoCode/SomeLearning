import Vue from 'vue'
import Vuex from 'vuex'

import {
  addCounter,
  updateInfoInStore,
  aUpdateInfo,
  updateModulesAName
} from '@/store/mutations-types.js'
// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const modulesA = {
  state: {
    name: 'modulesAName'
  },
  mutations: {
    [updateModulesAName](state, payload) {
      state.name = payload.name
    }
  },
  actions: {
    aUpdateNameInModulesA(context, payload) { //! 此处上下文的对象不再是 store
      setTimeout( () => {
        console.info(context);
        console.table(payload);
        //! 此处的 commit 只 commit 自己的东西
        context.commit(updateModulesAName, payload);
      }, 2000);
    }
  },
  getters: {
    modulesAGetters(state) {
      return state.name + '11';
    },
    modulesAGetters2(state, getters) {
      return getters.modulesAGetters + '22';
    },
    modulesAGetters3(state, getters, rootState) { //! 在模块中可以有第三个参数
      return getters.modulesAGetters2 + rootState.counter;
    }
  }
}

const store = new Vuex.Store({ //* 里面的值是固定的
  state: { //* 状态
    counter: 1000,
    students: [{
        id: 110,
        name: 'why',
        age: 18
      },
      {
        id: 111,
        name: 'duQingShan',
        age: 19
      },
      {
        id: 112,
        name: 'Colin',
        age: 20
      },
      {
        id: 113,
        name: 'LiangYue',
        age: 22
      }
    ],
    info: {
      name: 'duQingShan',
      age: 18,
      height: 300
    }
  },
  mutations: { //* 相当于组件的 methods
    [addCounter](state) {
      console.info(state)
      state.counter++
    },
    minCounter(state) {
      console.info(state)
      state.counter--
    },
    addCountInStore(state, count) {
      state.counter += count
    },
    addStudentInStore(state, stuInfo) {
      state.students.push(stuInfo)
    },
    [updateInfoInStore](state, updateInfo) {
      state.info.name = updateInfo.name;
      // state.info[address] = updateInfo.address
      // state.info.address = updateInfo.address //* 非响应式添加
      // Vue.set(state.info, 'address', updateInfo.address); //* 响应式添加

      // 删除对象中的某一个属性
      // delete state.info.age
      // 响应式删除
      // Vue.delete(state.info, 'age');

      /* setTimeout(() => {
        state.info.name = updateInfo.name;
      }, 1500); */
    }
  },
  actions: {
    // [aUpdateInfo](context, payload) { //* context --> 上下文 == store 对象
    //   setTimeout(() => {
    //     context.commit(updateInfoInStore, payload);
    //   }, 1500);
    // }
    [aUpdateInfo](context, payload) { //* context --> 上下文
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(updateInfoInStore, payload);
          resolve(payload.success);
        }, 1500);
      })
      }
  },
  getters: { //* 想当年关于组件的 computed
    powerCounter(state) {
      return state.counter ** 2
    },
    filterStudentAgeInStore(state) {
      return state.students.filter(s => s.age > 20)
      /* return {
        data: [state.students.filter(s => s.age > 20)],
        length: state.students.filter(s => s.age > 20).length
      } */
    },
    filterStudentAgeInStoreLength(state, getters) { //* 传参传入的就是 getters
      return getters.filterStudentAgeInStore.length
    },
    moreAgeStu(state) {
      /* return function(moreAge) {
        return state.students.filter( s => s.age > moreAge)
      } */
      return moreAge => {
        return state.students.filter(s => s.age > moreAge)
      }
    }
  },
  modules: {
    /* modulesA: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    },
    modulesB: {},
    modulesC: {} //* ... */
    a: modulesA
  }
})

// 3. 导出
export default store;
