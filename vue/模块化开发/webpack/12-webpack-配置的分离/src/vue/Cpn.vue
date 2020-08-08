<template>
  <div class="con">
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
    background-color: rgba(0, 0, 0, .2);
  }
  .con h2 {
    color: red;
  }
</style>