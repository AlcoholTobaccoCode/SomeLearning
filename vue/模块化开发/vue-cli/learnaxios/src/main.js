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
/* axios.defaults.baseURL = 'https://api.apiopen.top/';
axios.defaults.timeout = 5000;
axios.all([axios({
  url: '/videoHomeTab'
}), axios({
  url: '/videoHomeTab'
})]).then(axios.spread((res1, res2) => {
  console.info(res1);
  console.info(res2);
})); */

//* 4.创建对应的 axios 的实例
/* const instance1 = axios.create({
  baseURL: 'https://api.apiopen.top/',
  timeout: 5000
});

instance1({
  url: '/videoHomeTab'
}).then(res => {
  console.info(res);
});*/

//* 5.封装 request 模块
import {/* instance1, instance2, instance3,  */instance4} from './network/request'

/* instance1({
  url: '/videoHomeTab'
}, res => {
  console.info(res);
}, err => {
  console.info(err);
}); */

/* instance2({
  url: '/videoHomeTab',
  success (res) {
    console.info(res);
  },
  failure(err) {
    console.info(err);
  }
}); */

/* instance3({
  url: '/videoHomeTab',
}).then(res => {
  console.info(res);
}).catch(res => {
  console.info(res);
}); */

instance4({
  url: '/videoHomeTab',
}).then(res => {
  console.info(res);
}).catch(res => {
  // console.info(res);
});
