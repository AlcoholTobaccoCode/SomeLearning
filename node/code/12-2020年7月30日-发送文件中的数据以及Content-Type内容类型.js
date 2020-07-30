/**
 * 1. 结合 fs 发送文件中的数据
 * 2. Content-Type
 *  http://tool.oschina.net/commons
 *  不同的资源对应的 Content-Type 是不一样的
 *  图片不需要指定编码
 * 一般只为字符数据才指定编码
 * 
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {
  var url = request.url;

  if ( url === '/html' ) {
    // 肯定不这么干
    // response.end('<h1>...</h1>...');
  
    fs.readFile('./resouce/index.html', (err, data) => {
      if (err) {
        response.setHeader('Content-Type', 'charset=utf-8');
        response.end('文件读取失败, 请稍后重试!');
      } else {
        // data 默认是二进制数据, 可以通过 .toString 转为咱们能识别的字符串
        // res.end() 支持两种数据类型: 二进制、字符创
        response.setHeader('Content-Type', 'charset=utf-8');
        response.end(data);
      }
    })
  } else if ( url === '/m.jpg') {
    fs.readFile('./resouce/m.jpg', (err, data) => {
      if (err) {
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('文件读取失败, 请稍后重试!');
      } else {
        // 图片不需要指定编码了, 因为我们常说的编码一般指的是: 字符编码
        response.setHeader('Content-Type', 'image/jpeg');
        response.end(data);
      }
    });
      
  }


});

server.listen(3000, () => {
  console.log('Server is running...')
});