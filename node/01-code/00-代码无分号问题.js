function say() {
  console.log('Hello World');
}

say();

// 1. 
;(function() {
  console.log('hello');
})()

// 2.
;['banana', 'orange'].forEach(function (item) {
  console.log(item);
});

// 3. ` 
;`wulalala`.toString();

/**
 * 当你采用了无分号代码风格的时候, 只需要注意以下情况就不会有上述问题:
 *  当一行代码是以:
 *    (
 *    [
 *    `
 *    开头的时候,则在前面补上一个分号用以避免一些语法解析错误;
 * 
 *    总结: 
 *      无论你的代码风格与否, 都建议 如果一行代码是以 ( [ ` 开头的, 则最好在其前面补上 ';' (! ~ & 都可) 
*/