<template>
  <div>
    <h1> Home </h1>
    <router-link to="/home/news"> 新闻 </router-link>
    <router-link to="/home/message"> 消息 </router-link>
    <router-view></router-view>
    <h1>{{ messages }}</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      messages: '',
      message: ''
    }
  },
  created () {
    this.messages = '创建时'
    // console.log('创建时')
    // document.title = 'Home'
  },
  mounted () {
    this.messages = '当 template 已经挂载到 DOM 上时'
    // console.log('当 template 已经挂载到 DOM 上时')
  },
  update () {
    this.messages = '当界面发生更新时'
    // console.log('当界面发生更新时')
  }
}
</script>

<style scoped>

</style>
