const http = require('http');

const fs = require('fs');

const server = http.createServer();

let wwwDir = 'E:/our-project/JS学习/node/01-code/app'

server.on('request', (request, response)=> {
  let url = request.url;

  let filePath = '/index.html';
 
  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(wwwDir + filePath, (err, data) => {
    if (err) {
      return response.end('404 Not Found');
    }
    response.end(data);
  });

  console.log(filePath, wwwDir + filePath);

});

// 3. 绑定端口号, 
server.listen(3000, ()=>{
  console.log('server is running...')
});