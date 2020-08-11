# Vue CLI

## 什么是 Vue CLI

* 如果你只是简单写几个 Vue 的__Demo 程序__, 那么你不需要 Vue CLI.

* 如果你在__开发大型项目__, 那么你需要, 并且必然__需要使用Vue CLI__
  * 使用 Vue.js 开发大型项目时, 我们需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情;
  * 如果每个项目都要手动完成这些工作, 那无疑效率比较低效, 所以通常我们会使用一些脚手架工具来帮助完成这些事情.

* CLI 是什么意思?
  * CLI 是Command-Line Interface, 翻译为命令行界面, 但是俗称__脚手架__;
  * Vue CLI 是一个官方发布 vue.js 项目脚手架;
  * 使用 vue-cli 可以快速搭建Vue 开发环境以及对应的 webpack 配置.

* 脚手架长什么样子?

## Vue CLI 使用前提 - Node

* 安装 NodeJs

* ...

## Vue CLI 的使用

* 安装 Vue 脚手架
  * ``` npm install -g @vue/cli ```
  * 注意: 上面安装的是 Vue CLI3 的版本, 如果需要想按照 Vue CLI2 的方式初始化项目时不可以;
  * 拉取 2.x 模板(旧版本)
    * Vue CLI3 和旧版本使用了相同的 vue 命令, 所以 Vue CLI2(vue-cli)被覆盖了; 如果你仍然需要使用旧版本的 vue init 功能, 你可以全局安装一个桥接工具:

    ```npm
      npm install -g @vue/cli-init
      # `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
      vue init webpack my-project
    ```

* Vue CLI2 初始化项目
  * ``` vue init webpack my-project ```

  ```shell
    ? Project name xxx // 1. 项目名称, 不能包含大写
    ? Project description xxx // 2. 描述
    ? Author xxx // 3. 作者的信息, 会默认从 git 中读取信息
    ? Vue build xxx // 4. 后面详细介绍, 构建项目时选择类型
      > Runtime + Compiler: recommended for most users(翻译: 推荐大多数用户)
      > Runtime-only: about 6KB lighter min-gzip, but template (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere.(项目开发基本选这个, 优点: 占体积小; 运行更高效)
    ? Install Vue-router? Y/N  //5. 是否安装 vue-router
    ? Use ESLint to lint your code? Y/N // 6. 是否使用ESLint检测代码规范, 看自己的情况
    ? Set up unit tesrs? Y/N // 7. 单元测试(某些公司强制要求写单元测试)
    ? Setup e2e tests with Nightwatch? Y/N // 8. e2e 测试(end to end, 端对端测试, 浏览器自动测试), end to end, 安装 webdrive 或 phantomjs 等进行自动化测试的框架
    ? Should we run 'npm install' for you after the project has been created?(recommended) // 9. 选择 npm 或 yarn 安装都可以
      > Yes, use Npm
      > Yes, use Yarn
      > No, I will handle that myself
  ```

* Vue CLI3 初始化项目
  * ``` vue create my-project ```

  ```shell
  ? Please pick a preset: (Use arrow keys) // pick: 选择, preset: 配置
  > default (babel, eslint) // 默认配置
  > Manually select features // 手动选择配置, features: 特性
    Check the features needed for your project: (Press <space> to select(空格选择/取消), <a> to toggle all(全选), <i> to invert selection(反选))
    • Babel
    • TypeScript
    • Progressive Web App (PWA) Support (p: 先进的) : 先进的 web app
    • Router
    • Vuex
    • CSS Pre-processors
    • Linter / Formatter
    • Unit Testing
    • E2E Testing
  ? Where do you prefer placing for Babel, PostCSS, ESlint, etc.? (是否打算将 config 中的配置文件)
  > In dedicated config files (是但单独的放在一个文件中)
  > In package.json (还是直接放在 package.json 中)
  ? Save this as a preset for future projcets? (y/N) (将当前配置保存以供为未来的项目使用?)
    > y
    ? Save preset as: preset-name (以 xxx(preset-name) 名保存)
      - 删除去 .vuerc 里删除 (据说在 linux 中, 和终端命令有关的会有 'rc' 标识(run command))
  ```

* vue2.5.21 --> vue2.x --> flow-type(facebook)

* vue3.x --> TypeScript(microscft)

* vue-cli 3 与 2 版本有很大区别
  * vue-cli 3 是基于 webpack 4 打造,  vue-cli 2 还是 webpack 3
  * vue-cli 3 得到设计原则是 "0 配置", 移动的配置文件根目录下的 build 和 config 等目录
  * vue-cli 3 提供了 vue ui 命令, 提供了可视化配置, 更加人性化
  * 移除了 static 文件夹, 新增了 public 文件夹, 并且 index.html 移动到 public 中

## 理解 runtime-compiler 和 runtime-only

* 两者区别

  ```js
    // runtime-compiler
    import Vue from 'vue'
    import App from './App'

    Vue.config.productionTip = false // 产品提示, 产品构建时可以选择 true

    new Vue({
      el: '#app',
      template: '<App/>',
      components: { App }
    })

    // runtime-only
    import Vue from 'vue'
    import App from './App'

    Vue.config.productionTip = false

    new Vue({
      el: '#app',
      render: h => h(App)
      /*
      render: function(h) {
        /**
         * h = createElement()
         * 一、普通用法
         * 1.createElement('标签')
         *   createElement('h2') ==> 会将挂载的 app(<div id="app"></div>) 替换掉
         * 2.createElement('标签', {class: 'box'})
         *  替换之后的标签 class (其他类同)
         * 3.createElement('标签', {class: 'box'}, [''])
         *  [] 替换掉的标签内容
         * 4.createElement('标签',
         *     {class: 'box'},
         *     ['',
         *     createElement('p', {class: 'p'}, ['按钮'] )
         *     ]
         *    )
         * 二、传入组件对象:
         * const cpn = {
         *  template: '<div> {{ message }} </div>,
         *  data(){
         *    return() {
         *      message: '我是组件 message'
         *    }
         *  }
         * }
         *  return createElement(cpn);
         *  
         *  那么 .vue  文件中的 template 是由谁处理的了?
         *  是由 vue-template-compiler 解析编译
         *  
        */
        return h(App)
      }
      */
    })
  ```

  * Vue 程序运行过程
  
  ```text
    runtime-compiler(v1)
    template --> ast() --> render --> virtual DOM --> 真实 DOM

    runtime-only(v2)(1. 性能更高, 2.代码量更少 )
    render --> virtual DOM
  ```
