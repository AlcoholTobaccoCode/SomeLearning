<template>
  <div class="user">
    <h1> Welcome Home Sir. </h1>
    <h2> {{ userId }} </h2>
    <h2> {{ $route.params.userId }} </h2>
  </div>
</template>

<script>

export default {
  name: 'User',
  computed: {
    userId () {
      // console.log(this.$route)
      return this.$route.params.userId // para --> parameters 参数
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: #42b983;
}
</style>
