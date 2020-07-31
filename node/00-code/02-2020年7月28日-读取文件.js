/**
 * 
 * 浏览器中的 JavaScript 是没有文件操作能力的
 * 但是 Node 中的 JavaScript 具有文件操作的能力
 *
 * fs 是 file-system 的简写, 解释文件系统的意思
 * 在 Node 中如果想要进行文件操作,, 就必须引入 fs 这个核心模块
 * 在 fs 这个核心模块中, 就提供了所有的文件操作相关的 API
 * 例如: fs.readFile 就是用来读取文件的
 *  
*/

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2. 读取文件
/**
 * 第一个参数就是读取的文件路径
 * 第二个参数就是一个回调函数
 * 
 * 成功
 *  data 数据
 *  error null
 * 
 * 失败 
 *  data undefined
 *  error 错误对象 
 * 
 * 
*/
fs.readFile('./02readFile.txt', function(error, data) {
// console.log(`error`, error);
// console.log(`data`, data);
/**
 * data <Buffer 30 32 72 65 61 64 46 69 6c 65>
 * 文件中存储的其实都是二进制数据 0 1
 * 这里为什么看到的不是 0 和 1 呢? 原因是二进制转为 16 进制了
 * 但是无论是二进制还是 16 进制, 人类都不认识
 * 所以我们可以使用 toString() 将其转换成我们认识的字符
 * 
*/

// 在这里可以通过 error 来判断错误文件读取
if ( error ) {
    console.log('读取失败');
    return;
}
console.log(data.toString())


});