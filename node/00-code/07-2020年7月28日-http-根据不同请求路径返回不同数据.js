
const http = require('http');

// 1. 创建 http server
const httpServer = http.createServer();

// 2. 监听 request 请求事件， 设置请求处理函数
httpServer.on('request', (request, response)=> {
  // console.log('收到请求, 请求路径是: ' + request.url );


  /* response.write('Hello ');
  response.write('NodeJS!');
  response.end(); */
  // 上面的方式比较麻烦, 推荐使用更简单的方式, 直接 end 的同时发送数据

  // response.end('Hello NodeJS!');
  // response.end('你好');

  // 根据不同的请求路径发送不同的响应结果
  // 1. 获取请求路径
  //  request.url 获取到的是端口号之后的那一部分路径
  //  也就是说所有的 url 都是以 / 开头的

  // 2.响应

  var url = request.url;

  /* if ( url === '/' ) {
    response.end('index page');
  } else if ( url === '/login' ) { 
    response.end('login page');
  } else {
    response.end('404 Not Found');
  } */

  if ( url ==="/products" ) {
    var products = [
      {
        name: 'iphone',
        price: 6666
      },
      {
        name: 'iphone 1',
        price: 66666
      },
      {
        name: 'iphone 2',
        price: 666666
      },
    ];
  }

  // 响应内容必须是 字符串 或 二进制

  response.end(JSON.stringify(products));

});

// 3. 绑定端口号, 启动服务
httpServer.listen('8080', ()=> {

  console.log('访问成功');

});