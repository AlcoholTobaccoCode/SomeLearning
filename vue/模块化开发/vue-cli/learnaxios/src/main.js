import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/* axios({
  // method: 'post',
  url: 'https://api.apiopen.top/videoHomeTab',
  // params: { //* 专门针对 get 请求的拼接
  //   type: 'pop',
  //   page: 1
  // }
}).then(res => {
  console.info(res.data);
}); */

//* 2. axios 发送并发请求
/* axios.all([axios({
  url: 'https://api.apiopen.top/videoHomeTab'
}), axios({
  url: 'https://api.apiopen.top/videoHomeTab'
})]).then(results => {
  console.info(results)
}); */
/* axios.all([axios({
  baseURL: 'https://api.apiopen.top',
  timeout: 5,
  url: '/videoHomeTab'
}), axios({
  url: 'https://api.apiopen.top/videoHomeTab'
})]).then(axios.spread((res1, res2) => {
  console.info(res1);
  console.info(res2);
})); */

//* 3. 全局配置
axios.defaults.baseURL = 'https://api.apiopen.top/';
axios.defaults.timeout = 5000;
axios.all([axios({
  url: '/videoHomeTab'
}), axios({
  url: '/videoHomeTab'
})]).then(axios.spread((res1, res2) => {
  console.info(res1);
  console.info(res2);
})); 