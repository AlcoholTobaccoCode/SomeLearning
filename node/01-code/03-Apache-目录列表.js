const http = require('http');

const fs = require('fs');

const server = http.createServer();

let wwwDir = 'E:/our-project/JS学习/node/01-code/app'

server.on('request', (request, response) => {
  let url = request.url;
  fs.readFile('./template.html', (err, data) => {
    if (err) {
      return response.end('404 Not Found');
    }

    /**
     * 1. 如何得到 wwwDir 目录列表中的文件名和目录名
     *    fs.readdir.
     * 2. 如何将得到的文件名和目录名替换到 template.html 中
     *    2.1 在 template.html 中需要替换的位置预留一个特殊的标记, 就像以前使用模板引擎的标记一样.
     *    2.2 根据 files 生成需要的 HTML 内容.
     *  
     * 
     * 只要你做了这两件事儿, 那这个问题就解决了
     */
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return response.end('Can not find www dir');
      }
      // response.end(files);

      // 2.1
      var content = '';
      files.forEach(item => {
        content += `
          <li>
            <a href="/01-code/app/${item}" class="icon icon icon-html icon-text-html" title="${item}">
              <span  class="name">${item}</span>
              <span class="size">219</span>
              <span class="date">2020/8/2 上午12:22:28</span>
            </a>
          </li>`;
      });
      // 2.3 替换
      data = data.toString();
      data = data.replace('^_^', content);

      // 3. 发送解析替换后的数据
      response.end(data);
    });
  });
});

// 3. 绑定端口号, 
server.listen(5501, () => {
  console.log('server is running...')
});