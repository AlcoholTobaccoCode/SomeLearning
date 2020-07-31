
var fs = require('fs');

/**
 * 第一个参数: 文件路径
 * 第二个参数: 文件内容(单纯写入会覆盖)
 * 第三个参数: 回调函数
 *  error
 *  成功:
 *    文件写入成功
 *    error 是 null
 *  失败:
 *    文件写入失败
 *    error 是 错误对象
 * 
*/

var historyText = '';

fs.readFile('./02readFile.txt', function(error, data) {
  historyText = data.toString();
});

fs.writeFile('./02readFile>.txt', historyText + '你好啊, 我是 Node.js 写入的' ,function(error) {
  console.log(`error`, error);
  if ( error ) {
    console.log('文件写入失败');
  } else {
    console.log('文件写入成功');
  }

});