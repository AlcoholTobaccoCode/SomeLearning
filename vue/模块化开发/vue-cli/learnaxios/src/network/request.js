import axios from 'axios'

//* 使用 `function` 是为了防止后续有多个网络请求
export function instance1(config, success, failure) {
  debugger
  //* 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'https://api.apiopen.top/',
    timeout: 5000
  });

  instance(config)
  .then(res => {
    if (success) {
      success(res);
    }
  })
  .catch(res => {
    if (failure) {
      failure(res);
    }
  });
}