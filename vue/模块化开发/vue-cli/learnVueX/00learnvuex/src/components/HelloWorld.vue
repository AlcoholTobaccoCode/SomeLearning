<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '我是 HelloWorld 组件'
    }
  }
  /* props: {
    counter: Number
  } */
}
</script>

<style scoped>

</style>
