var name = '小明';
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if ( flag ) {
  // console.log(" i'm xiaoming");
  // console.log(" flag is " + flag);
  console.log(sum(20, 30));
} else {
  // console.log(" i'm xiaoming");
  // console.log(" flag is " + flag);
}

// 1. 导出方式①
export {
  flag,
  sum
}

// 2. 导出方式②
export var num1 = 1000;
export var height = 1.88;


// 3. 导出函数/类
// 3.1 导出一个function
export function mul(num1, num2) {
  return num1 * num2;
}

// 3.2 导出一个class
export class Person {
  run() {
    console.log('快跑');
  }
}

{/*
  以前定义类
  function Person() {

  }

  ES6 中定义类
  class Person {

  }
*/}

// 4. export default 由导入者自己命名
{/* const address = '北京市';
export {
  address
}
或 
export const address = '北京市';
*/}
// const address = '北京市';
// 同一个模块中, 不允许多个export default, 只能有一个
// export default address;

export default function(argument) {
  console.log(argument);
} 
