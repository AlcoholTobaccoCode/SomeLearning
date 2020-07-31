/**
 * require
 * 端口号
 * 
*/


const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  
  console.log('收到请求了, 请求路径是: ' + request.url);
  // console.log('收到请求了, 请求的ip是: ' + response.socket.remoteAddress);
  // console.log('收到请求了, 请求端口号是: ' + response.socket.remotePort);

  /**
   * 服务器默认发送的数据, 默认是 utf8 编码的内容
   * 但是浏览器不知道你是 utf8 编码的内容
   * 浏览器在不知道服务器响应内容编码的情况下，会按照当前操作系统的默认编码去解析
   * 中文操作系统默认是 gbk
   * 解决方法就是正确的告诉浏览器我給你发送的是什么编码的
   * 在 http 协议中, Content-Type就是用来告知对方我給你发送的数据内容是什么类型
   * 
   * 
  */

  // response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // response.end('Hello 世界');

  var url = request.url;

  if ( url === '/plain' ) {
    // text/plain 普通文本
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('hello 世界');
  } else if ( url === '/html' ) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end('<h1><a href="plain">点我</a></h1>'); // 浏览器会帮你解析html元素
  } else {
    response.end('404 not found');
  }

});

server.listen(3000, () => {
  console.log('Server is running...')
});