/**
 * 基本数据类型
 * String Number Boolean Null Undefined
 * 引用数据类型
 * Object （Object array function data 等）
 * 
 * 在JS中为我们提供了三个包装类， 通过这三个包装类可以将基本数据类型的数据转换为对象
 *  String()
 *    - 可以将基本数据类型 字符串 转换为String 对象
 *  Number()
 *    - 可以将基本数据类型的数字转换为 Number 对象
 *  Boolean()
 *    - 可以将基本数据类型的布尔值转换为 Boolean 对象
 *  
 *  但是注意， 我们在实际应用中不会使用基本数据类型的对象
 *    如果使用基本数据类型的对象, 我们在进行一些比较时，可能会出现不可预知的情况
*/

// 创建一个 Number 类型的对象 
var num = new Number(3);
var num2 = new Number(3);
var num1 = 3;

// console.log(typeof num); // object 
// console.log(typeof num1); // number

// console.log(num == num2); // false
// console.log(num == num1); // true
// console.log(num === num1); // false

var b = new Boolean(false);

if (b) {
   console.log(1); // 会运行
}







