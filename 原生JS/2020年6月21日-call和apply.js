function func(a, b) {
   console.log("a = "+ a  + ", b = " + b);
   console.log(this);
}

/**
 * call() 和 apply()
 *  - 这两个方法都是函数对象的方法, 需要通过函数对象来调用
 *  - 在调用 call() 和 apply() 都会调用函数执行
 *  - 在调用call()和apply() 可以将一个对象指定为第一个参数
 *       此时这个对象将会成为函数执行时的 this
 *  - call() 方法可以将实参在对象之后依次传递
 *  - apply() 方法需要将实参封装到一个数组中统一传递
 * 
 *  - this的情况
 *       1.以函数形式调用时, this 永远都是 window;
 *       2.以方法形式调用时， this 是调用方法的对象;
 *       3.以构造函数的形式调用时, this 是新创建的那个对象;
 *       4.使用call和apply调用时, this 是指定的那个对象.
 * 
 */
/* func();
func.call();
func.apply(); */

var obj = {
   name: 'obj',
   sayName: function () {
      console.log(this.name);
   }
};
var obj1 = {
   name: 'obj1'
};
// func(); // 永远都是window
// func.call(obj); // 指定
// func.apply(obj1); // 指定
// obj.sayName.call(obj1); // 只要用到call(), 就专注call() 括号里面的参数, 括号里面是啥, this 就会被他代替
// func.call(obj1, 1, 2);
// func.apply(obj1, [1, 2]);