const http = require('http');

const fs = require('fs');
// 1. 创建 server
const server = http.createServer();

/**
 * 2. 监听 Server 的 request 请求事件, 设置请求处理函数
 *    请求
 *      处理
 *    响应
 *    一个请求对应一个响应, 如果在一个请求的过程中, 响应已经结束响应了, 则不能重复发送响应.
 *    没有请求就没有响应
*/
server.on('request', (request, response)=> {
  console.log(request.url);
  let url = request.url;
  let filePath = './app/';
  if (url === '/') {
    fs.readFile(filePath + 'index.html', (err, data) => {
      if (err) {
        return response.end('404 Not Found');
      }
      response.end(data);

    });

  } /* else if (url === '/a.txt') {

    fs.readFile(filePath + 'a.txt', (err, data) => {
      if (err) {
        return response.end('404 Not Found');
      }
      response.end(data);

    });

  } else if (url === '/apple/login.html') {

    fs.readFile(filePath + 'apple/login.html', (err, data) => {
      if (err) {
        return response.end('404 Not Found');
      }
      response.end(data);

    });

  } else {
    return response.end('404 Not Found');
  } */


});

// 3. 绑定端口号, 
server.listen(3000, ()=>{
  console.log('server is running...')
});