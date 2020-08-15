<template>
  <div id="app">
    <router-link to="/hello"> hello </router-link>
    <router-link to="/home"> 首页 </router-link>
    <router-link to="/about"> 关于 </router-link>
    <router-view></router-view> <!-- 决定我们渲染出来的内容所在位置 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
