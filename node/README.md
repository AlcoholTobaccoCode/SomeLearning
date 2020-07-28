# Node.js
<!-- nodejs.org -->

## 一、Node.js介绍

### 1.1 为什么要学习 Node.js

* 企业需求
  * 具有服务端开发经验更好
  * front-end（前端）
  * back-end(后端)
  * 全栈开发工程师
    * 全干
  * 基本的网站开发能力
    * 服务端
    * 前端
    * 运维部署
  * 案例: 多人社区

### 1.2 Node.js 是什么

* Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine(Node.js 基于 Chrome V8 JavaScript引擎).
  * Node.js 不是一门语言;
  * Node.js 不是库, 不是框架;
  * Node.js 是一个 JavaScript 运行时环境;
  * 简单来讲就是 Node.js 可以解析和执行 JavaScript 代码;
  * 也就是说现在的 JavaScript 可以完全脱离浏览器来运行, 一切都归功于: Node.js.
* 浏览器中的 JavaScript
  * ECMAScript
    * 只包含基本语法;
    * if、var、function、Object、Array.
  * DOM
  * BOM
* Node.js 中的 JavaScript
  * 没有 __BOM、DOM__;
  * ECMAScript;
  * 在 Node.js 这个 JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作 API
    * 例如文件读写
    * 网络服务的构建
    * 网络通信
    * http 服务器
    * 等处理...
* 构建于 Chrome 的 V8 引擎之上
  * 代码只是具有特定格式的字符串而已;
  * 引擎可以认识它, 引擎可以帮你去解析和执行;
  * Google Chrome 的 V8 引擎是目前公认的解析执行 JavaScript 代码最快的;
  * Node.js 的作者把 Google Chrome 中的 V8 引擎移植了出来, 开发了一个独立的 JavaScript运行时环境.

* Node.js users an event-driven, non-blocking I/O model than makes it lightweight and efficient(Node.js 为用户提供了一个事件驱动的、非阻塞的输入/输入模型, 使它变得轻量级和高效).
* Node.js 特性
  * event-driven 事件驱动;
  * non-blocking I/O model 非阻塞IO模型(异步);
  * lightweight and efficient 轻量和高效.

* Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world(Node.js 包生态系统, npm, 是世界上最大的开源库生态系统).
  * npm 是世界上最大的开源库生态系统;
  * 绝大多是 JavaScript 相关的包都存放在 npm 上, 这样做的目的是为了让开发人员更方便的去下载使用;
  * npm install package.

### 1.3 Node.js 能做什么

* Web 服务器后台
  * 接口服务器
  * 游戏服务器
  * ...
* 命令行工具
  * npm(node)
  * git(C 语言)
  * hexo(node)
  * ...
* 对于前端工程师来讲, 接触 node 最多的是它的命令行工具
  * 自己写的很少, 主要是使用别人第三方开发的
  * webpack
  * gulp
  * npm

### 1.4 预备知识
  
* HTML
* CSS
* JavaScript
* 简单的命令行操作
* 具有服务端的开发经验更佳

### 1.5 一些资源

* 本笔记主要来源课程: [bilibili《Node.JS-7天-黑马程序员》](https://www.bilibili.com/video/BV1Ns411N7HU?p=1)
* 《深入浅出 Node.js》
  * 朴(piao)灵
  * 偏理论, 几乎没有任何实战内容
  * 理解原理底层有帮助
  * 结合课程的学习去看

* 《Node.js 权威指南》
  * API 讲解
  * 也没有业务, 没有实操

* [JavaScript 标准参考教程(alpha)](https://wangdoc.com/javascript/)
* [官方 API 文档](https://nodejs.org/en/docs/)
* [Node 入门](http://www.nodebeginner.org/index-zh-cn.html)
* [中文文档(版本比较旧, 凑合看)](http://www.nodeclass.com/api/node.html)
* [CNODE 社区](http://cnodejs.org)
* [CNODE 新手入门](http://cnode.org/getstart)

### 1.6 这门课程内容

* B/S 编程模型
  * Browser - Server
  * back-end
  * 任何服务端技术这种 BS 编程模型都是一样的, 和语言无关
  * Node 只是作为我们学习 BS 编程模型的一个工具而已
* 模块化编程
  * RequireJS
  * SeaJS
  * `@import('文件路径')`
  * 以前认知的 JavaScript 只能通过 `script` 标签来加载
  * 在 Node 中可以像 `@import()` 一样来引用加载 JavaScript 脚本文件
* Node 常用 API
* 异步编程
  * 回调函数
  * Promise
  * async
  * generator
* Express 开发框架
* ECMAScript 6
  * 在课程中穿插讲解
  * 它是一个新语法而已
* ...
* 学习 Node 不仅会帮助大家打开服务端黑盒子, 同时会帮助你学习以后的前端高级内容
  * Vue.js
  * angular
  * react

## 二、起步

### 2.1 安装 Node 环境

* 查看当前 Node 环境的版本号

* [下载](https://nodejs.org/en/download)

* 安装
  * 傻瓜式的一路 `next` 就可以了
  * 对于已经安装过的, 重新安装可以升级

* 确认 Node 环境是否安装成功
  * 打开命令行, 输入 `node --version`
  * 或者 `node -v`

* 环境变量

### 2.2 Hello World

1. 创建编写 JavaScript 脚本文件;(注意: 文件名不要使用 `node.js` 来命名, 除了 `node` 这个名字随便起, 最好也别使用中文)
2. 打开终端, 定位到脚本文件所属目录;
3. 输入 `node 文件名` 执行对应的文件;

* 解释执行 JavaScript

* 读写文件

* http

```JavaScript
  // 1. 加载 http 核心模块
  const http = require('http');
  // 2. 使用 http.createServer() 方法创建一个 WEB 服务器
  // 返回一个 Server 实例
  const server = http.createServer();

  // 3. 服务器要干嘛?
  //  提供服务: 对数据的服务
  //  发请求
  //  接受请求
  //  处理请求
  //  給个反馈(发送响应)
  //  注册 request 请求事件
  //    当客户端请求过来, 就会自动触发服务器的 request 请求事件, 
  //  然后执行第二个参数: 回调处理

  // request 请求事件处理函数, 需要接受两个参数
  //  Request 请求对象
  //    请求对象可以用来获取客户端的一些请求信息, 例如请求路径
  //  Response 响应对象
  //    响应对象可以用来給客户端发送响应消息
  server.on('request', function(request, response) {
    // http:127.0.0.1:3000/ /
    // http:127.0.0.1:3000//a
    // ...
    console.log('收到请求了, 请求路径是: ' + request.url);

    // response 对象有一个方法: write 可以用来給客户端发送响应数据
    // write 可以使用多次, 但是最后一定要使用 end 来结束响应, 否则客户端会一直等待

    response.write('hello ');
    response.write(' nodeJS');
    response.end();

    // 由于现在我们的服务器的能力还非常的弱, 无论是什么请求, 都只能响应 hello nodeJS
    // 思考:
    //  我希望当请求不同的路径的时候响应不同的结果
    // 例如:
    //   /  index
    //   /  /login 登录
    //   /  /resign 注册
    //   /  /haha  哈哈
  });

  // 4. 绑定端口号, 启动服务器
  server.listen(3000, function() {
    console.log('服务器启动成功, 访问 http:127.0.0.1:3000/');
  });
```

### 2.3 Node 中的 JavaScript

* ECMAScript
  * 没有DOM、BOM

* 核心模块
  * Node 为 JavaScript 提供了很多服务器级别的 API, 这些 API 绝大多数都被包装到了一个具名的核心模块中.例如文件操作的`fs` 核心模块, http 服务构建的 `http` 模块, `path`路径操作模块, `os` 操作系统的系统信息模块...
  * 使用核心模块, 必须要想到这样引用

  ```JavaScript
    const fs = require('fs');
    fs.readFile();
    fs.writeFile();
  ```

* 第三方模块

* 用户自定义模块

### Node 中的模块系统
