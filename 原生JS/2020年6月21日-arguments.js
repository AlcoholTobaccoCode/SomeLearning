/**
 * 在调用函数时， 浏览器每次都会传递两个隐含的参数:
 *    1. 函数的上下文对象 this
 *    2. 封装实参的对象 arguments
 *       - arguments 是一个类数组对象， 它也可以通过索引来操作数据, 也可以获取长度
 *       - 在调用函数时, 我们所传递的实参都会在 arguments 中保存;
 *       - arguments.length 可以用来获取实参的长度
 *       - 即使不定义形参, 也可以通过arguments来使用实参
 *          只不过比较麻烦:
 *           arguments[0]  第一个实参..
 *           ...
 *       - 它里面有个属性叫做 callee
 *          这个属性对应一个函数对象, 就是当前正在指向的函数对象
*/

function fun() {
   // console.log(arguments); // [Arguments] {}
   // console.log(Array.isArray(arguments)); // false
   // console.log(arguments.length);// 实参的长度
   // console.log(arguments.callee);
   console.log(arguments.callee == fun); // true
}

fun(1, 1, 3);





