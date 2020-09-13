# Promise

## 00-Promise 的基本使用

### 什么是 Promise 呢

* ES6 中一个非常重要和好用的特性就是 Promise

* Promise 到底是做什么的呢?
  * <font color="red"> __Promise 是异步编程的一种解决方案__ </font>

* 那什么时候我们会来处理异步事件呢
  * 一种很常见的场景应该就是网络请求了
  * 我们封装一个网络请求的函数, 因为不能立即拿到结果, 所以不能像简单的 3 + 4 = 7 一样将结果返回
  * 所以往往我们会传入另外一个函数, 在数据请求承购时, 将数据通过传入的函数回调出去
  * 所以只是一个简单的网络请求, 那么这种方案不会給我们带来很大的麻烦

* 但是, 当网络请求非常复杂时, 就会出现回调地狱

* 网络请求的回调地狱
  * 我们来考虑下面的场景(有夸张的成分):
    * 我们需要通过一个 url1 从服务器加载一个数据 data1, data1 中包含了下一个请求的 url2
    * 我们需要通过 data1 取出 url2, 从服务器加载数据 data2, data2 中包含了下一个请求的 url3
    * 我们需要通过 data2 取出 url3, 从服务器加载数据 data3, data3 中包含了下一个请求的 url4
    * 发送网络请求 url4, 获取最终的数据 data4

    ```js
      // 模拟上述 '回调地狱'
      $.ajax('url1', function(data1) {
        $.ajax(data1['url2'], function(data2) {
          $.ajax(data2['url3'], function(data3) {
            $.ajax(data3['url4'], function(data4) {
              console.log(data4)
            })
          })
        })
      })
    ```

* 上面代码有什么问题吗
  * 正常情况下, 不会有什么问题, 可以正常运行并获取我们想要的结果
  * 但是, 这样的代码难看而且不容易维护
  * 我们更加期望的是一种更加优雅的方式来进项这种异步操作

* 如何做呢? 就是使用 Promise
  * Promise 可以以一种非常优雅的方式来解决这个问题
  * Promise 是对我们的异步请求做一些处理的一个 __类__

### 定时器的异步事件
  
* Promise 最基本的语法
  * 我们先来看看 Promise 最基本的语法

  ```js
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Hello World');
      resolve('Error Dara');
    }, 1000);
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  });
  ```

### Promise 的三种状态

<!-- 
  sync: 同步
  async: 异步
-->

* 首先, 当我们开发中有异步操纵时, 就可以給异步操作包装一个 Promise
  * 异步操作之后会有三种状态

* 我们一起来看一下这三种状态
  * pending: 等待状态, 比如正在进行网络请求, 或者定时器没有到时间.
  * fulfill: 满足状态, 当我们主动回调了 resolve 时, 就处于该状态, 并且会回调 .then().
  * reject: 拒绝状态, 当我们主动回调了 reject 时, 就处于该状态, 并且会回调 .catch().

### 链式调用简写

* 简化版代码
  * 如果我们希望数据直接包装成 Promise.resolve, name在 then 中可以直接返回数据
  * 注意在 02-Promise的链式调用.html 文件中的 '2', 将 `return Promise.resolve(data)` 改成了 `return data`, 结果依然是一样的
  * 同时, 在简写时, 可以使用 '3' 中的 `throw` 来规避异常
