<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <!-- <i class="iconfont icon-tabbarhomeselect"></i>
    <div class="name">首页</div> -->
    <div class="icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="icon" v-else><slot name="tab-bar-active"></slot></div>
    <div class="name"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() { // 动态查找当前活跃的路由, 动态給当前导航加上高亮
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      if ( this.$route.path != this.link ) {
        this.$router.replace(this.link)
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/iconfont/TabBar/iconfont.css';

  .tab-bar-item {
    flex: 1;
    height: 49px; /* 一般 tab-bar 的高度为 49px(常用高度) */
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    font-size: 10px;
    color: #999;
  }
  
  .tab-bar-item div {
    width: 100%;
    color: inherit;
  }

  .tab-bar-item .icon i {
    font-size: 2.8em;
  }

  /* .active {
    color:pink;
  } */

</style>