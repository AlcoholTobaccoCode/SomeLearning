
<template>
<div id="app">
  <h1>{{ message }}</h1>
  <!-- <h2>{{ counter }}</h2> -->
  <h2> {{ $store.state.counter }} </h2>
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
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
    }
  },
}
</script>

<style>

</style>
