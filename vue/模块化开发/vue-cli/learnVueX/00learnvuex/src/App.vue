
<template>
<div id="app">
  <h2> --------- App 内容: modulesA 相关信息 --------- </h2>
  <input type="text" placeholder="change info" v-model="newName" />
  <button @click="updateModulesA">修改 modulesA 中的 name</button>
  <h2 style="color: blue">{{ $store.state.a.name }}</h2>
  <h2 style="color: blue">{{ $store.getters.modulesAGetters }}</h2>
  <h2 style="color: blue">{{ $store.getters.modulesAGetters2 }}</h2>
  <h2 style="color: blue">{{ $store.getters.modulesAGetters3 }}</h2>
  <button @click="asyncUpdateModulesA">异步修改 modulesA 中的 name</button>


  <h1>{{ message }}</h1>
  <!-- <h2>{{ counter }}</h2> -->
  <h2> {{ $store.state.counter }} </h2>
  <!-- <button @click="$state.state.counter++">+</button> -->
  <button @click="addInApp">+</button>
  <button @click="minInApp">-</button>
  <button @click="addCountInApp(5)">+5</button>
  <button @click="addCountInApp(10)">+10</button>
  <br />
  <input type="text" placeholder="id" v-model="addStudentId">
  <br />
  <input type="text" placeholder="name" v-model="addStudentName">
  <br />
  <input type="text" placeholder="age" v-model="addStudentAge">
  <br />
  <button @click="addStudent">添加学生</button>

  <h2> --------- App 内容: getters 相关信息 start_0 --------- </h2>
  <!-- <h2>{{ $store.state.counter * $store.state.counter}}</h2> -->
  <h2>{{$store.getters.powerCounter}}</h2>
  <!-- <h2>{{ $store.getters.filterStudentAgeInStore.data }}</h2> -->
  <!-- <h2>{{ $store.getters.filterStudentAgeInStore.length }}</h2> -->
  <h2>{{ $store.getters.filterStudentAgeInStore }}</h2>
  <h2>{{ $store.getters.filterStudentAgeInStoreLength }}</h2>
  <h2>{{ $store.getters.moreAgeStu(18) }}</h2>

  <h2> --------- App 内容: info 对象的内容是否是响应式的 --------- </h2>
  <h2 style="color:red">{{ $store.state.info }}</h2>
  <input type="text" placeholder="change info" v-model="cInfo" />
  <br />
  <input type="text" placeholder="change address" v-model="address" />
  <button @click="updateInfo">改变 store.state 中 info 的内容</button>


  <h2> --------- App 内容: getters 相关信息 end --------- </h2>


  <!-- <hello-world :counter="counter"></hello-world> -->
  <hello-world></hello-world>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import {
  addCounter,
  updateInfoInStore,
  aUpdateInfo,
  updateModulesAName
} from '@/store/mutations-types.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: '我是 APP 组件',
      addStudentId: '',
      addStudentName: '',
      addStudentAge: '',
      cInfo: '',
      address: '',
      newName: ''
    }
  },
  computed: {
    // {'id': 115, 'name': 'add', 'age': 110}
    /* filterStudentAgeInApp() {
      return this.$store.state.students.filter(s => s.age > 20)
    } */
  },
  methods: {
    addInApp() {
      this.$store.commit(addCounter)
    },
    minInApp() {
      this.$store.commit('minCounter')
    },
    addCountInApp(count) {
      this.$store.commit('addCountInStore', count)
    },
    addStudent() {
      let addStudentInfo = {
        id: this.addStudentId,
        name: this.addStudentName,
        age: this.addStudentAge
      }
      this.$store.commit('addStudentInStore', addStudentInfo)
    },
    updateInfo() {
      let uInfo = {
        name: this.cInfo,
        address: this.address,
        success: 'success'
      }
      // this.$store.commit(updateInfoInStore, uInfo);
      // this.$store.dispatch(aUpdateInfo, {
      //   uInfo,
      //   success: () => {
      //     console.info('success')
      //   }
      // }); //* dispatch: 提交数据并调用在 Action 中的方法
      this.$store.dispatch(aUpdateInfo, uInfo).then(res => {
        console.info(res);
      });
    },
    updateModulesA () {
      const newName = {
        name: this.newName
      }
      this.$store.commit(updateModulesAName, newName);
    },
    asyncUpdateModulesA() {
      const newName = {
        name: this.newName
      }
      this.$store.dispatch('aUpdateNameInModulesA', newName);
    }
  }
}
</script>

<style>

</style>
