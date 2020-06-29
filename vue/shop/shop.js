const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 0,
        name: '《算法寻论》',
        date: ' 2017-02 ',
        price: 49.00,
        count: 1
      },
      {
        id: 1,
        name: '《UNIX编程艺术》',
        date: ' 2016-03 ',
        price: 59.00,
        count: 1
      },
      {
        id: 2,
        name: '《编程珠玑》',
        date: ' 2015-04 ',
        price: 39.00,
        count: 1
      },
      {
        id: 3,
        name: '《代码大全》',
        date: ' 2014-05 ',
        price: 128.00,
        count: 1
      }
    ],
  },
  methods: {
    // getFinaPrice(price) {
    //   return '$' + price.toFixed(2)
    // }
    increment(index) {
      console.log('+');
      this.books[index].count++;
    },
    decrement(index) {
      console.log('-');
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // 1. 普通的for 循环
      /*for (let i = this.books.length - 1; i >= 0; i--) {
        totalPrice += this.books[i].price * this.books[i].count
      }*/

      // 2. for(let i in books)
      /*for ( let i in this.books ) {
        totalPrice += this.books[i].price * this.books[i].count
      }*/

      // 3. for ( let i of this.books)
      /*for ( let item of this.books ) {
        totalPrice += item.price * item.count
      }*/

      // reduce (高阶函数 qwqqq)


      // return totalPrice;
      return this.books.reduce((preValue, book) => {return preValue + book.price * book.count}, 0);
    }
  }
});

// 编程范式：命令式编程 / 声明式编程
// 编程范式：面向对象编程(第一公民：对象) / 函数式编程(第一公民: 函数)
// filter / map / reduce

// 函数式编程 - 例子
const nums = [10, 20, 111, 222, 444, 40, 50];
// 1.需求 取出所有小于100的数字
/*let newNums = [];
for (let n of nums) {
  if ( n < 100 ) {
   newNums.push(n);
  }
}*/ 
// 2.需求 将所有小于100的数字进行转化： 全部 * 2
/*let newNums2 = [];
for ( let n of nums) {
  newNums2.push(n * 2);
}*/
// 3.需求：将所有newNum2数字相加，得到最终的结果
/*let total = 0;
for (let n of nums) {
  total += n;
}*/

// filter(回调函数)  filter中的回调函数有个要求=>必须返回一个布尔值
// 当返回 true 时， 函数内部会自动将这次回调的n加入到新的数组中
// 当返回 false 时， 函数会过滤掉这次的n
let newNums =  nums.filter( (n)=>{
  return n < 100;
});
// console.log(newNums);

let newNums2 = newNums.map((n)=> {
  return n * 2;
});
// console.log(newNums2);

// reduce 对数组中所有内容进行汇总
// reduce(前一个值, 当前的值, 当前索引, 要操作的数组)
// 至少传两个值
let total = newNums2.reduce((preValue, n)=>{
  // preValue 上一次返回的值
  return preValue + n;
});
// console.log(total);
/**
 * 第一次： preValue - 0 ， n - 20
 * 第二次： preValue - 20 n - 40
 * 第三次： preValue - 60 n - 80
 * 第四次： preValue - 140， n - 100
 * 
*/
/**
 * 示例：
 * let newNum3 = newNum2.reduce((preValue, n) => {
 *  return 100;
 * }, 0)
 * 
 * 第一次： preValue - 0 ， n - 20
 * 第二次： preValue - 100， n - 40
 * 第三次： preValue - 100， n - 80
 * 第四次： preValue - 100， n - 100
 * 
*/
/**
 * 拓展:
 * reduce(参数一: fn(回调函数), 参数二: 0(初始化值))
 */

// 汇总：
// （链式编程）
let newTotal = nums.filter((n)=>{
  return n < 100;
}).map((n)=>{
  return n * 2;
}).reduce((preValue, n) => {
  return preValue + n
}, 0);
// console.log(newTotal);

// 再简化
/**
 * 一个参数可以不用括号，只有一句返回不需要return
 */
let newNewTotal = nums.filter(n => n < 100).map( n => n * 2).reduce( (pre, n) => pre + n );
// console.log(newNewTotal);