/**
 * art-template 
 * art-template 不仅可以在浏览器中使用, 在 node 中使用
 * 
 * 安装: 
 *  npm install art-template
 *  该命令在哪执行就会把包下载到哪里, 默认会下载到 node_module 目录中,
 *  node_module 不要改, 也不支持改
 * 
 * 在 Node 中使用 art-template 模板引擎
 * 模板引擎最早就是诞生于服务器领域, 后来才发展到了前端。
 * 
 * 1. 安装
 * 2. 在需要使用的文件模块中加载 art-temaplte 
 *  只需要使用 require 方法加载就可以了: reequire('art-template);
 *  参数中的 art-template 就是你下载的包的名字
 *  也就是说你 install 的名字是什么, 则你 require 中的就是什么
 * 3. 查文档, 使用模板引擎的 API
 * 
 * 
 */

const artTemplate = require('art-template');
 // artTemplate('script 标签 id', {'对象'}) // 这里不是浏览器

var tplStr = `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <p>大家好, 我叫{{ name }},</p>
      <p>我今年 {{ age }}岁了, </p>
      <p>我来自{{ address }},</p>
      <p>我喜欢: {{ each hobbies }} {{ $value }} {{ /each }}</p>
    </body>
  </html>`;

// artTemplate.render('模板字符串', '替换对象');
var ret = artTemplate(tplStr, {
  name: 'Coin',
  age: 18,
  address: '地球',
  hobbies: ['coding', 'watch mv']
});

console.log(ret);