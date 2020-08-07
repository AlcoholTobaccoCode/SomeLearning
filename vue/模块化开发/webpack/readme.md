# 内容概述

## 认识webpack

* 什么是webpack?
  * 这个webpack还真不是一两句话可以说清楚的.

* 官方解释:
  * At it's core, __webpack__ is a _static module bundler_ for modern JavaScript applications.
  * 从本质上来讲, webpack是一个现代的JavaScript应用的静态 __模块打包__ 工具.

* 但它是什么呢? 用概念解释概念, 还是不清晰.
  * 我们从两个点来解释上线这句话: __模块__ 和 __打包__.
[webpack](./imgs/what is webpack.jpg)
* webpack 可以作为一个底层支撑:
  * 🌰: 我们可以在commonJS中编写逻辑, 使用webpack打包, 将js处理完成完成后,可以使大多数浏览器适应高版本js代码, 打包完成后commonJS不会存在于文件夹;其次, css、ims 在webpack 中也作为一个模块存在.
* __模块__
  * __此处内容关联./模块化开发/模块化开发.md 中的前端模块化__
* __打包__ 如何理解呢?
  * 理解了webpack可以帮助我们进项模块化, 并且处理模块间的各种复杂关系后, 打包的概念就非常好理解了.
  * 就是将webpack中的各种资源模块进项打包合并成一个或多个包(Bundle).
  * 并且在打包过程中, 还可以对资源进行处理, 比如压缩图片, 将scss转换成css, 将ES6语法转成ES5语法, 将TS转换成JS等等操作.
  * 但是打包的操作似乎grunt/gulp也可以帮助我们完成, 他们有什么不同呢?
  * 和grunt/gulp的对比
    * grunt/gulp的核心是Task
      * 我们可以配置一系列的task, 并且定义tas(任务流)k要处理的事务(例如ES6、TS转化, 图片压缩, scss转成css)
      * 之后让grunt/gulp来依次执行这些task, 而且让整个流程自动化.
      * 所以grunt/gulp 也被成为前端自动化任务管理工具.
    * 我们来看一个gulp的task
      * 下面的task就是将src下面的所有js文件转换成ES5的语法, 并且最终输出到dist文件夹中.

      ```gulp
        const gulp = require('gulp');
        const babel = require('gulp-babel');

        gulp.task('js', () =>
          gulp.src('src/*.js')
            .pipe(babel({
              presets: ['es2015']
            }))
            .pipe(gulp.dest('dist'))
        );
      ```

      * 什么时候用grunt/gulp呢?
        * 工程依赖非常简单;
        * 只需要进行简单的合并、压缩, 就使用grunt/gulp即可;
        * 但是如果整个项目使用了模块化管理, 而且相互依赖非常强, 我们就可以使用更加强大的webpack了.
  
  * 所以grunt/gulp和webpack有什么不同呢?
    * grunt/gulp 更加强调的前端流程的自动化, 模块化不是他的核心.
    * webpack更加强调模块化开发管理, 而文件压缩合并, 预处理等功能, 是他附带的功能.

## webpack的安装

* 安装webpack首先需要安装 __Node.js__ , Node.js自带了软件包管理工具npm
* 查看自己的node版本
  * node -v
* 全局安装webpack(跟着老师安装3.6.0版本, 因为vue cli2依赖该版本)
  * npm install webpack@3.6.0 -g
* 局部安装webpack(后续才需要)
  * --save-dev 是开发时依赖, 项目打包后不需要继续使用的.
  * cd 对应目录
  * npm install webpack@3.6.0 --save-dev
* 为什么全局安装后, 还需要局部安装呢?
  * 在终端直接执行webpack命令, 使用的全局安装的webpack;
  * 当在package.json中定义了scripts时, 其中包含了webpack命令, 那么使用的是局部webpack.

## webpack的起步

* dist -> distribution(发布)
* 文件导入
  * 1. 使用 common.js 的模块化规范导入: const { varName, ... } = require('./..');
  * 2. 使用 ES6 的模块化规范: import { varName, ... } from './..';

## webpack的配置

* npm init 初始化项目信息;

* 在终端里使用的包都是使用全局的包;

* 在 package.json 中的 scripts 中定义运行脚本, 会优先使用本地的包;

## loader的使用

* 安装 loader: npm install --save-dev css-loader/style-loader

## webpack中配置Vue

* vue 在构建时, 构建了两个版本
  * runtime-onle --> 在构建此版本时, 不允许有任何 template ( {{}} 也是template);
  <!-- 会报错: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. -->
  * runtime-compiler --> 代码中, 可以有 template, 因为有 compiler 可以编辑 template;

* .vue 文件推荐文件名首字母大写

## plugin的使用

## 搭建本地服务器
