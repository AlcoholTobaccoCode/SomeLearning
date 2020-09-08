<template>
  <div id="app">
    <router-view></router-view>
    <MineTabBar></MineTabBar>
  </div>
</template>

<script>
import MineTabBar from '@/components/MineTabBar'

export default {
  name: 'App',
  components: {
    MineTabBar,
  }
}
</script>

<style>
  @import './assets/styles/base.css';

</style>
