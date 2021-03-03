import axios from 'axios'

//* 使用 `function` 是为了防止后续有多个网络请求
export function instance1(config, success, failure) {
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

export function instance2(config) {
  debugger
  const instance = axios.create({
    baseURL: 'https://api.apiopen.top/',
    timeout: 5000
  });

  instance(config)
  .then(res => {
    config.success(res);
  })
  .catch(res => {
    config.failure(res);
  });
}

export function instance3(config) {
  return new Promise((resolve, reject) => {
    //* 1. 创建 axios 实例
    const instance = axios.create({
      baseURL: 'https://api.apiopen.top/',
      timeout: 5000
    });

    instance(config)
    .then(res => {
      resolve(res);
    })
    .catch(res => {
      reject(res);
    })
  })
};

export function instance4(config) {
  const instance = axios.create({
    baseURL: 'https://api.apiopen.top/',
    timeout: 5000
  });

  return instance(config);
}

