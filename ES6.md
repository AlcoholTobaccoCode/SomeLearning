


// 关于字符串的一些东西↓
	-> 字符串查找:
		str.indexOf(要找的东西) 返回索引(位置)，没找到返回 -1
		str.includes(要找的东西) 返回值 true/false

	-> 判断浏览器: navigator.userAgent(浏览器详细详细)
		navigator.userAgent.includes('Chorme');

	-> 判断字符串是否是以XXX开头: 
		xxx://xxx.com
		str.startsWith(检测东西)
	-> 判断字符串是否是以XXX结尾:
		xxx.png / xxx.html 
		str.endsWith(检测东西)

	-> 重复字符串: 
		str.repeat(次数)：
		--> let a = 'a'; a.repeat(10)  //return ->:aaaaaaaaaa

	-> 填充字符串:
		str.padStart(整个字符串的长度，填充的东西)  // 往前填充
		str.padEnd(整个字符串的长度，填充的东西)	 // 往后填充

=======================================================================

// 函数变化
	1.函数的默认参数
		function shwo({x=0,y=0}={}) {
			console.log(x,y) // 0 0
		}
		show()
	2.↑函數的参数默认已经定义了，不能在使用let、const 声明
		function show(a=18) {
			let a = 101;
			console.log(a)
		}
		show();
		// ↑ Identifier 'a' has already been declared

// 扩展运算符(Rest运算符)(Rest)
	...   ← 对没错，就是这玩意  扩展+重置

	1.展开数组
		let arr = ['apple','banana','orange'];
		..arr -> apple banana orange
	2.
		[1,2,3,4] -> ...[1,2,3,4] -> 1,2,3,4
		1,2,3,4 -> ...1,2,3,4 -> [1,2,3,4]
		用作剩余参数时，必须放在末尾

// 箭头函数: =>
	
	=>
		//箭头函数.html
		let show = () => 1;  =>: 左边是参数，右边是返回值
		let show = (a,b) => a + b;
		//箭头函数1.html
		let xx = () => return 东西
		//完整格式↓
		//箭头函数2.html
		let xx = () => {
			// TODO
			return
		}
		
		:注意----------------------->
		//箭头函数-注意html
			1.this问题，定义函数所在的对象，不再是运行时所在的对象
				该this会指向距离最近的非箭头函数的对象的 this;
			2.arguments ,箭头函数里面没有arguments,用...xx:
				let show = (...args) => {
					console.log(args)
				}show(1,2,3,4,5)
			3.箭头函数不能当构造函数

// 数组: =>
		1.for 
			for(let i = 0;i<arr.length; i++){} ->
		2.while
	ES5新增: 
		arr.forEach() (可代替for)
		arr.map() // 非常有用，做数据交互叫做“映射”；
					正常情况下，需要配合return使用；
					返回的是一个新数组；
					若没有ruturn 就相当于forEach()；
					使用map基本要有return；
					重新整理数据结构: ↓
						[{title:'aaa'}] -> [{t:'aaa'}]

		arr.filter() // 过滤，过滤一些不合格"元素"，如果回调函数返回true，留下来

		arr.some() // 类似查找，数组里面某一个元素符合条件就返回true

		arr.every()// 类似查找，数组里面所有都要元素符合条件就返回true

		// ↑ 以上都接受俩个参数
		// arr.forEach(回调函数,this的指向(默认window))
		arr.forEach(function(val, index, arr){
			console.log(val,index,arr)
			// val 值
			// index 索引 
			// arr 传入的数组
		},this)
		// 箭头函数中，this指向当前定义这函数所在的对象
		arr2.forEach((val, index, arr) => {
			console.log(this) // 指向123
		})

		arr.reduce() // 求数组的和/阶乘  // 从左往右
		arr.reduceRight() // 从右往左
----------------------------------------------
	ES2017新增的一个运算符
		Math.pow(2,3) == 2 ** 3 （幂运算符）
	ES2017(6)：
		for...of:
			// arr.keys()   数组下标
			// arr.entries()  数组的某一项
----------------------------------------------
// 扩展运算符 =>
		...

		let arr = [1,2,3];
 		let arr2 = [...arr]; arr2复制arr数组


		let arr2 = Array.form(arr);
Array.form:
		作用: 把类数组(获取的一组元素、arguments)对象转成数组

		个人观点：只要具备length这个对象，就靠谱;
		对象需要加 length
		let json2 = {
			0: 'apple',
			1: 'banana',
			2: 'orange',
			length:3
		};
Array.of(): 把一组值转成数组
	let arr = Array.of('apple', 'banana', 'orange');

arr.find(): 找出 <第一个> 符合要求的元素,如果没找到，返回 undefined

arr.findIndex(): 找出第一个符合要求的元素的索引,找不到返回 -1

arr.fill(): 填充
	arr.fill(填充的东西, 开始位置,结束位置) (不包含开始、结束位置)

在ES2016 里面新增：
	arr.indexOf() // 上下对比
	arr.includes()// 上下对比
		str.includes(); // 包含则返回 true
=====================================================
// 对象 => 
	json 

	对象简介语法(相当有用):
	let name = 'Colin';		
	let age = 18;

	let json = {
		name: name,
		age: age,
		showA: function () {
			return this.a;
		}
		showB: function () {
			return this.b;
		}
	}

	let json1 = {
		name, //==  name: name,
		age, // == age: age
		showA:function() {
			return this.name;
		},
		// 别用箭头函数
		showB() {
			return this.name;
		},
	}
		console.log(json1.showA(),json1.showB())

	//相同: 
		new Vuex.Store({
			state, // state = state
			mutation,
			types,
			actions
			})
		new Vue ({
			router,
			App,
			vuex
		})

// Object.is() // 用来比较俩个值是否相等
	Object.is('a','a');
		比较俩个东西相等：
			== 
			===
		需要长得一样
		Object.is(NaN,NaN); //true
		Object.is(+0,-0); //false

// Object.assign(): //用来合并对象
	Object.assign(目标对象,源头,source2...)
	function ajax (options) { // 用户传
		let defaults = {
			type:'get',
			header:
			data:{}
			...
		};
		let json = Object.assign({},defaults, options);
		...
	} 	

	用途: 
		1.复制一个对象/数组；
		2.合并参数。

ES2017引入：
Object.keys()
Object.entries();
Object.values();

	let {keys, values, entries} = Object;
	for (let [key, val] of entries(json)) {
		console.log(key,val)
	}

对象身上: 计划在ES2018
	...
	let json = {a:3, b:4 };
	let json2 = {...json};
======================================================
Promise: 承诺、许诺

	作用: 解决异步回调问题

	传统方式，大部分回调函数，时间
	ajax(url,()=>{ //获取token
		ajax(url,()=>{ //获取用户信息
			ajax(url,()=>{ //获取用户相关新闻

			})
		})
	})

	-Promise 语法: 
	let promise = new Promise(function (resolve, reject){
			// resolve 成功时调用
			// reject 失败时调用
	})
	Promise.then(success, error)
		Promise.then(res=>{

		}, err=> {

		})
	
	Promise.catch(err => { // reject,发生错误，别名
		console.log(err)
	})
	
	老潇用法: 
		new Promise().then(res=>{

		}).catch(err => {

		})

	Promise.resolve('aa'); // 将现有的东西，转成一个promise对象，resolve状态，成功状态
	let p = Promise.resolve('aaa');
		p.then(res => {
			console.log(res)
	})
	// 与下p1相等
	let p1 = new Promise(resolve => {
			resolve('aaa')
	})

	Promise.reject('aa');将现有的东西，转成一个promise对象，reject状态，失败状态
	//reject
	let b = Promise.reject('bbb');
	b.then(res => {
		console.log(res)
	}).catch(err => {
		console.log(err)
	})

	Promise.all([p1, p2,  p3]):把Promise打包,扔到一个数组里面，打包完还是一个Promise对象;
	必须确保，所有的promise对象，都是resolve(成功)状态；

	Promise.race([p1, p2,  p3]):Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
=====================================================
// 模块化 =>
	js不支持模块化
		ruby require
		python import

	在ES6之前，社区制定一套模块规范:
题外话:	Commonjs 	主要服务端 nodeJs  require('http')
		AMD			requireJs,curJs
		CMD			seaJs

	ES6出来，统一服务端和客户端模块化规范
		import {xx} ddd

		Math.pow()
		Math.abs()
		import {pow,abs} from 'Math'  // 老潇瞎想的 - -  不知能否实现(2015年)

	模块化:
		注意: 需要放到服务器环境
		a). 如何定义模块？
			export CODE...
			export const a = 12;
			export {
				a as aaa,
				b as banana,
				c as cup
			}

		b). 如何使用？
			import
			import {a, b, c, d} from './modules/1.js'

			import {aaa, banana, cup} from './modules/2 copy.js'

			import {aaa as a, banana as b , cup as c} from './modules/2 copy.js'

			import * as modTwo from './modules/2.js';
			console.log(modTwo)
			console.log(modTwo.aaa)



	使用模块: 
		<script type="module"></script>

	import: 特点
		a).import 可以是相对路径。也可以是绝对路径
		import './modules/1.js' 
		import 'https://code.jquery.com/jquery-3.3.1.js'
		b).import模块只会导入一次，无论引入多少次
		c). import './modules/1.js' ; 如果这么引用，相当于引用文件
		d).import 有提升效果，import 会自动提升到顶部，首先执行
		e).导出去的模块内容，如果里面有定时器更改，外面也会改动不像Common规范缓存
export default 12;
export const cc = 1122;
export const dd = 1132;

import a,{cc, dd} from './modules/4.js'


*	按需加载
	import() 类似node里面的require，可以动态引入；默认import语			法不能写到if之类里面
		返回值，是个promise对象

优点:  
	1.按需加载
	2.可以写if中
	3.路径可以是动态的

	Promise.all([])
		Promise.all([
			import ('./modules/1.js'),
			import ('./modules/2.js')
		]).then(([mod1,mod2])=>{
			console.log(mod1);
			console.log(mod2);
		})
===========================================
ES2017 加 async  await
// https://www.cnblogs.com/SamWeb/p/8417940.html
		async function main() {
			const mod1 = await import ('/modules/1.js');
			const mod2 = await import ('/modules/2.js');
			console.log(mod1,mod2);

			const [m1,m2] = await Promise.all([
				import ('./modules/1.js'),
				import ('./modules/2.js')
			]);
		console.log(m1,m2);
		}
		main()
==============================================

 'use strict'  // 可能以后默认就是严格模式，ES6中模块化默认是严格模式 

==============================================
// 类和继承 =>

面向对象: 类

	函数模拟: 
		-> 人:Preson(类名大写)(构造函数首字母大写)
			属性: name
			展示: showName
		Person.prototype.showName
ES5之前: 
	function Person() {
		this.name = 'aaa';
	}
	Person.prototype.showName = function(){}

ES6中变形: 
class
--------------------------语言的想通，能实现？
    class Personnn {
        constructor(name, age){ // 构造方法(函数)，只要调用new，自动执行
            console.log(`构造函数执行了, ${name}, ${age}`);
        }
    }
    let p1 = new Personnn('Colin', 18)
a)_
class Person {
	constructor(){
		this.name = 'aaa';
	}// 此处无 "," ，下面无function
	showName() {

	}
}
b)_
const Ppperson = class {
	curstructor(){}
}
	let a = 'Colin';
	let b = 'method';

	class Person {
		[a+n](){
			console.log(2333)
		}
	}

	let aaa = 'aaa';
	let bbb = 'bbb';
	let json = {
		[aaa+bbb]:'Welcome'
	}

class定义类:  ***注意
1. Es6 里面class没有提升(预解析)功能，在ES5，用函数模拟可以，默认函数提升
2. ES6里面this 比之前轻松多了

	矫正this: 
		1. fn.call(this指向谁， arg1, arg2...)
		2. fn.apply(this指向谁,[arg1,arg2...])
		3. fn.bind() 绑定this
--------------------------------------------------------
class里面新增:
取值函数(getter),存值函数(setter)
--------------------------------------------------------
静态方法: 就是类身上的方法(static)
        class Person {
            constructor () {
            }
            static aaa() {
                return '这是静态方法'
            }
        }
        let p1 = new Person();
        console.log(Person.aaa());
--------------------------------------------------------
父类
子类
继承:
	之前:
Person
Student

	现在: extends
	class Student extends person {

	}
--------------------------------------------------------
拖拽

