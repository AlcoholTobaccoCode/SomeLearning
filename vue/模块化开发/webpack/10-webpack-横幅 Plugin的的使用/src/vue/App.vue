<template>
  <div class="con">
    <h2>{{ title }}</h2>
    <button @click="btnClick">btn</button>
    <h1>{{ name }} </h1>
    <Cpn />
  </div>
</template>

<script>
import Cpn from './Cpn';
/**
 * 关于简写参看 webpack.config.js
 * 
*/

export default {
  name: 'App',
  data() {
    return {
        title: 'Hello',
        name: 'Coin'
    }
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  },
  components: {
    Cpn
  }
}
</script>

<style scoped>
  .con {
    background-color: pink;
  }
  .con h2 {
    color: powderblue;
  }
</style>