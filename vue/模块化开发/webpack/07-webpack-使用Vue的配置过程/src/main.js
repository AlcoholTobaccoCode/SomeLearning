/**
 * 程序入口
 */
// 1. 使用 common.js 的模块化规范
const {
  add,
  mul
} = require('./js/mathUntils');

console.log(add(1, 2));
console.log(mul(2, 2));

// 2. 使用 ES6 的模块化规范
import { name, age, hobbies } from './js/info';
document.writeln('<h1>' + name + '</h1>');
document.writeln('<p>' + age + '</p>');

// 3. 依赖 css 文件
require('./css/normal.css');

// 4. 加载依赖 less 文件
require('./css/special.less');

// 5. 在项目中直接使用 vue 进行开发
import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello'
  }
});