<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link="/home">
        <i class="iconfont icon-tabbarhome" slot="item-icon"></i>
        <i class="iconfont icon-tabbarhomeselect" slot="tab-bar-active"></i>
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <i class="iconfont icon-leimupinleifenleileibie" slot="item-icon"></i>
        <i class="iconfont icon-tabbar" slot="tab-bar-active"></i>
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shoppingcart">
        <i class="iconfont icon-gouwuchekong" slot="item-icon"></i>
        <i class="iconfont icon-gouwucheman" slot="tab-bar-active"></i>
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/mine">
        <i class="iconfont icon-wode" slot="item-icon"></i>
        <i class="iconfont icon-TABbar-fill" slot="tab-bar-active"></i>
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar'
import TabBarItem from '@/components/TabBar/TabbarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/styles/base.css';

</style>
