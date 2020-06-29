
    // 1. 属性的增强写法:
    const name = 'why';
    const age = 18;
    const height = 18.7;

    // ES5的写法
    /* const obj = {
      name: name,
      age: age,
      height: height
    } */

    // ES6写法

    /* const obj = {
      name,
      age,
      height
    } */
    // 该方法会默认将变量名作为 key

    // console.log(obj);


    // 2.函数的增强写法:
    // ES5的写法
    /* const obj = {
      run: function() {
      }
    } */

    // ES6
    /* const obj = {
      run() {
      }
    } */

