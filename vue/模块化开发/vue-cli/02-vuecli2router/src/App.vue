<template>
  <div id="app">
    <router-link tag="button" to="/hello"> hello </router-link>
    <router-link tag="button" to="/home"> 首页 </router-link>
    <router-link tag="button" to="/about"> 关于 </router-link>
    <router-link tag="button" :to="'/user/' + userId"> 用户</router-link>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <keep-alive>
      <router-view></router-view> <!-- 决定我们渲染出来的内容所在位置 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick () {
      let pathName = location.pathname
      if (pathName !== '/home') {
        this.$router.replace('/home')
        // this.$router.push('/home')
      }
      // 所有的组件都继承自 Vue 的原型
      /* console.log(this.$route)
      console.log(this.$router)
      console.log(this.test())
      console.log(this.name) */
    },
    aboutClick () {
      let pathName = location.pathname
      if (pathName !== '/about') {
        this.$router.replace('/about')
        // this.$router.push('/about')
      }
      // console.log('about')
    }
  }
}
</script>

<style>

</style>
