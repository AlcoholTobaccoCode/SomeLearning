
<template>
<div id="app">
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

  <h2> --------- App 内容: getters 相关信息 start --------- </h2>
  <!-- <h2>{{ $store.state.counter * $store.state.counter}}</h2> -->
  <h2>{{$store.getters.powerCounter}}</h2>
  <!-- <h2>{{ $store.getters.filterStudentAgeInStore.data }}</h2> -->
  <!-- <h2>{{ $store.getters.filterStudentAgeInStore.length }}</h2> -->
  <h2>{{ $store.getters.filterStudentAgeInStore }}</h2>
  <h2>{{ $store.getters.filterStudentAgeInStoreLength }}</h2>
  <h2>{{ $store.getters.moreAgeStu(18) }}</h2>
  <h2> --------- App 内容: getters 相关信息 end --------- </h2>


  <!-- <hello-world :counter="counter"></hello-world> -->
  <hello-world></hello-world>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

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
      this.$store.commit('addCounter')
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
    }
  }
}
</script>

<style>

</style>
