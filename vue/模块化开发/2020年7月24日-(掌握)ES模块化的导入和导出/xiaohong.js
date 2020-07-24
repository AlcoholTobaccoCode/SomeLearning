// 1. 导入方式① 导入的是{}中定义的变量; 
import {sum, Person} from './xiaoming.js';

var name = '小红';
var age = 18;
var flag = false;

if ( flag ) {
  // console.log(" i'm xiaohong");
  // console.log(" flag is " + flag);
} else {
  // console.log(" i'm xiaohong");
  // console.log(" flag is " + flag);
  console.log(sum(100, 1));

}

// 2. 导入方式② 直接导入export 中定义的变量;
import {num1, height} from './xiaoming.js';
console.log(num1);
console.log(height);

// 3. 导入方式③ 导入的是 export 中的 函数 和 类
// 3.1 导入 function
import {mul} from './xiaoming.js';
console.log(mul(10, 20));

// 3.2 导入 class
const person = new Person;
person.run();

// 4. export default
import adr from './xiaoming.js';
// 不加{}时, 默认导出xiaoming.js中的export default中的值；
adr('你好啊');

// 5. 统一全部导入
import * as importAll from './xiaoming.js';
console.log(importAll.flag);
console.log(importAll.sum(132, 222));

/**
 * import使用
 *  - 我们使用export指令导出了模块对外提供的接口, 
 *  下面我们就可以通过import命令来加载对应的这个模块了.
 *  - 首先, 我们需要在HTML代码中引入两个JS文件, 并且类型需要设置为type="module":
 *  🌰: <script src="base.js" type="module"></script>;
 *  (浏览器会解析 export / import语法, 帮助我们解析)
 *  - import 指令用于导入模块中的内容, 比如 base.js的代码:
 *  import { name, age } from './base.js';
 *  - 如果我们希望某个模块中所有的信息都导入, 一个个导入显然有些麻烦:
 *    - 通过 * 可以导入模块中所有的export变量.
 *    - 但是通常情况下我们需要给 * 起一个别名, 方便后续使用.
 * 
 */

