<template>
  <div>
    <h1> Home </h1>
    <router-link to="/home/news"> 新闻 </router-link>
    <router-link to="/home/message"> 消息 </router-link>
    <router-view></router-view>
    <!-- <h1>{{ messages }}</h1> -->
    <!-- <h2>{{ message }}</h2> -->
    <!-- <button v-on:click='changeMes()'>change message</button> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      messages: 1,
      message: '',
      changeMes: null,
      path: '/home/news'
    }
  },
  methodds: {
    /* changeMes () {
      console.log(1)
      this.message = this.messages + 1
      this.messages += 1
    } */
  },
  beforeCreate () {
    console.log('创建前')
  },
  created () {
    // this.messages = '创建时'
    console.log('创建时')
    // document.title = 'Home'
  },
  beforeMounte () {
    // console.log('挂载前')
  },
  mounted () {
    // this.messages = '当 template 已经挂载到 DOM 上时'
    // console.log('当 template 已经挂载到 DOM 上时')
  },
  beforeUpdate () {
    // console.log('更新前')
  },
  update () {
    // this.messages = '当界面发生更新时'
    // console.log('当界面发生更新时')
  },
  beforeDestroy () {
    // console.log('销毁前')
  },
  destroyed () {
    console.log('销毁')
  },
  activated () {
    console.log('活跃的')
    console.log()
    if (this.$route.path !== this.path) {
      this.$router.push(this.path)
    }
  },
  deactivated () {
    console.log('不活跃的')
  },
  beforeRouteLeave (to, from, next) {
    // console.log(this.$router.path)
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
