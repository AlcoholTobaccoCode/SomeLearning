<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
// const axios = require('axios');

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '我是 HelloWorld 组件'
    }
  },
  mounted() {
    console.info(axios);
    /* axios({
      url: 'https://api.apiopen.top/musicRankingsDetails?type=1',
      methods: 'get',
      params: {
        type: 'pop',

      }
    }).then( res => {
      console.info(res.data.result);
    }); */


    axios.all([axios({
      url: 'https://api.apiopen.top/musicRankingsDetails?type=1',
      methods: 'get',
    }), aixos({
      url: 'https://api.apiopen.top/musicRankingsDetails?type=1',
      methods: 'get',
    })].then( axios.sprad((res1, res2) => {

    })));
  }
  /* props: {
    counter: Number
  } */
}
</script>

<style scoped>

</style>
