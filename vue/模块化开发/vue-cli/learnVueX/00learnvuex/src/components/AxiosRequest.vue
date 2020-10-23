<template>
  <div>
    <h1> axios </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Axios',
  data() {
    return {

    }
  },
  mounted() {
    console.info(1);
    axios({
      url: 'http://httpbin.org/get?show_env=1'
    }).then( res => {
      console.info(res);
    });
  }
}
</script>