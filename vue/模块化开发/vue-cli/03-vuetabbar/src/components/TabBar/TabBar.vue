<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    border-top: 1px solid #e6e6e6;
  }


</style>