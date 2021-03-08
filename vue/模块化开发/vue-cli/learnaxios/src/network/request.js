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
  //* 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'https://api.apiopen.top/',
    timeout: 5000,
    // Headers: {}
  });

  //* 2. axios 拦截器
  //* 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // console.log('✨ ~ file: request.js ~ line 67 ~ instance4 ~ config', config);

    /**
     * 何时使用
     * 1). 比如 config 中的一些信息不符合服务器的要求;
     * 2). 比如每次发送网络请求时, 都希望在界面显示一个请求的 loading 图标;
     *  show.xxx
     * 3). 某些网络请求(比如 登录(token)), 必须携带一些特殊的信息;
     * 4). and so on...
     * 
    */
    return config; //! 记住返回, 不然请求会出错
  }, err => {
    // console.log('✨ ~ file: request.js ~ line 70 ~ instance4 ~ err', err);
    
  });

  //* 2.1 响应拦截
  instance.interceptors.response.use(res => {
    // console.log('✨ ~ file: request.js ~ line 88 ~ instance4 ~ res', res);
    return res.data; //* 记住返回
  }, err => {
    console.log('✨ ~ file: request.js ~ line 91 ~ instance4 ~ err', err);

  });


  return instance(config);
}

