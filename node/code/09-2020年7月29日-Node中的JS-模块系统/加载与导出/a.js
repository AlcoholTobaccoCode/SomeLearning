/**
 * 
 * require 方法有俩个作用,
 *  1. 加载文件模块并执行里面的代码
 *  2. 拿到被加载文件模块导出的接口对象
 * 
 * 
 *  在每个文件模块中都提供了一个对象: exports
 *  exports 默认是一个空对象
 *   你要做的就是把所有需要的外部访问的成员
 * 
*/

var bExports = require('./b');

const fs = require('fs');

console.log(bExports.foo);

console.log(bExports.add(1 , 2));

bExports.readFile('./a.js');

fs.readFile ('./a.js', function(err, data){
  if (err) {
    console.log('读取文件失败');
  } else {
    console.log(data.toString());
  }
});