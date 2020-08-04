/**
 * 程序入口
 */
// 1. 使用 common.js 的模块化规范
const {
  add,
  mul
} = require('./mathUntils');

console.log(add(1, 2));
console.log(mul(2, 2));

// 2. 使用 ES6 的模块化规范
import { name, age, hobbies } from './info';
console.log(name);
console.log(age);