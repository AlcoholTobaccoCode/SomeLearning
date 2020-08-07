<template>
  <div class="con">
    <h2>我是 CPN 组件的标题</h2>
    <h2>我是 CPN 组件的标题</h2>
    <h2>我是 CPN 组件的标题</h2>
    <h2>我是 CPN 组件的标题</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        name: ''
    }
  },
  methods: {}
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