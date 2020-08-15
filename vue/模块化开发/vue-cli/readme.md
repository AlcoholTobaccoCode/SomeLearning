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
  * ` vue init webpack my-project `

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
  * ` vue create my-project `

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
  * 目录解释:

    ```floder
      public --> 相当于 CLI2 中的 static 目录
      src --> 源代码, 以后就在这里写
      .browserslistrc --> 浏览器相关支持情况
      .gitignore --> git 忽略的文件
      babel.config.js --> ES 语法转换
      postcss.config.js --> css 相关转换
    ```

  * 配置在
    * vue ui, 启动 ` vue ui `,可以启动本地服务器: GUI

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

## vue - 路由

* 认识路由
  * 说起路由你想起了什么?
    * 路由是一个网络工程里面的术语
    * __路由(routing)__ 就是通过互联的网络把信息从原地址传输到目的地址的活动 --- wiki 百科
  * 拓展
    * 在生活中, 我们有没有听说过路由的概念呢? 当然了, 路由器嘛.
    * 路由器是做什么的, 你有想过吗?
    * 路由器提供了两种机制: 路由和转送.
      * 路由是决定数据包从 __来源__ 到 __目的地__ 的路径;
      * 传送端将 __输入端__ 的数据转移到合适的 __输出端__.
    * 路由中有一个非常重要的概念叫路由表
      * 路由表本质上就是一个映射表, 决定了数据包的指向.
  * 后端路由阶段
    * 早期的网站开发整个 HTML 页面是由服务器来渲染的
      * 服务器直接生产渲染好对应的 HTML 页面, 返回给客户端进行展示
    * 但是, 一个网站, 这么多页面服务器如何处理呢?
      * 一个页面有自己的对应的网址, 也即是 URL
      * URL 会发送到服务器, 服务器会通过正则对该 URL 进行匹配, 并且最后交給一个  Controller 进行处理
      * 这就完成了一个 IO 操作。
    * 上面的这些操作就是后端路由
      * 当我们页面中需要请求不同的 __路径__ 内容时, 交給服务器来进项处理, 服务器渲染好整个页面, 并且将页面返回給客户端
      * 这种情况下渲染好的页面, 不需要单独加载任何的 js 和 css, 可以直接交給浏览器展示, 这样也有利于 SEO 的优化.
    * 后端路由的缺点
      * 一种情况是整个页面的模块由后端人员来编写和维护的
      * 另一种情况是前端开发人员如果要开发页面, 需要通过 PHP 和 Java 等语言来编写页面代码
      * 而且通常情况下, HTML 代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.
  * 前后端分离阶段
    * 随着 AJax 的出现, 有了前后端分离的开发模式
    * 后端只提供 API 来返回数据, 前端通过 Ajax 获取数据, 并且可以通过 JavaScript 将数据渲染到页面中
    * 这样做最大的优点是前后端责任的清晰, 后端专注于数据上, 前端专注于交互和可视化上
    * 并且当移动端(IOS/Android)出现后, 后端不需要进行任何处理, 依然使用之前的一套 API 即可
    * 目前很多的网站依然采用这种模式开发.
  * 单页面富应用阶段
    * 其实 SPA 最主要的特点就是在前后端分离的基础上加了一层前端路由
    * 也就是前端来维护一套路由规则.
  * 前端路由的核心是什么呢?
    * 改变 URL, 但是页面不进行整体的刷新
    * 如何实现?
  * URL 的 hash
    * URL 的 hash 也就是锚点(#), 本质上是改变 window.location 的 href 属性
    * 我们可以通过直接赋值 location.hash 来改变 href, 但是页面不发生刷新.

    ```js
    > location.href // href -> hypertext reference
    <·"http://127.0.0.1:8080/examples/urlChange/"
    > location.hash = '/'
    <·"/"
    > location.href
    <·"http://127.0.0.1:8080/examples/urlChange/#/"
    > location.hash = '/foo'
    <·"/foo"
    > location.href
    <·"http://127.0.0.1:8080/examples/urlChange/#/foo"
    ```
  
  * HTML5 的 history 模式: pushState
    * pushState

    ```js
    > location.href
    <·"http://127.0.0.1:8080/examples"
    > history.pushState({}, '', '/foo')
    <·underfined
    > location.href
    <·"http://127.0.0.1:8080/foo"
    > history.pushState({}, '', '/')
    <·underfined
    > location.href
    <·"http://127.0.0.1:8080/"
    ```

    * go 模式

    ```js
    history.go() // 此处接着上处代码
    > location.href
    <·"http://127.0.0.1:8080/"
    > history.go(-1)
    <·underfined
    > location.href
    <·"http://127.0.0.1:8080/foo"
    > history.go(-1)
    <·underfined
    > location.href
    <·"http://127.0.0.1:8080/examples/urlChange/"
    > history.go(-)
    <·underfined
    > location.href
    <·"http://127.0.0.1:8080/foo"
    /**
    * 补充说明
    * 上面只演示了三个方法
    * 因为 history.back() 等价于 history.go(-1)
    * history.forward() 则等价于 history.go(1)
    * 这三个接口等同于浏览器界面的前进后退
    */
    ```

  * 目前前端流行的三大框架, 都有自己的路由实现
    * Angular 的 ngRouter
    * React 的 ReactRuoter
    * Vue 的 vue-router
  * 当然, 我们的重点是 vue-router
    * vue-router 是 Vue.js 官方的路由插件, 它和 vue.js 是深度集成的, 适合用于构建单页面应用
    * 我们可以访问其 [官方网站](https://router.vuejs.org/zh/) 对其进行学习
  * vue-router 基于路由和组件
    * 路由用于设定访问路径, 将路径和组件映射起来.
    * 在 vue-router 的单页面应用中, 页面的路径的改变就是组件的切换.

* vue-router 基本使用
  * 安装和使用 vue-router
    * 因为我们已经学习了 webpack, 后续开发中我们主要是通过工程化的方式进行开发的
      * 所以在后续, 我们直接使用 npm 来安装路由即可
      * 步骤一: 安装 vue-router
        * `npm install vue-router --save`
      * 步骤二: 在模块化工程中使用它, 因为是一个插件, 所以可以通过 Vue.use() 来安装路由功能
        * 第一步: __导入__ 路由对象, 并且 __调用 Vue.use(VueRouter)__
        * 第二步: 创建 __路由实例__, 并且传入路由映射配置
        * 第三部: 在 __Vue实例__ 中 __挂载__ 创建的 __路由实例__
    * 使用 vue-router 的步骤:
      * 第一步: 创建路由组件
      * 第二步: 配置路由映射: 组件和路径映射关系
      * 第三步: 使用路由: 通过 `<router-link>` 和 `<router-view>`
        * `<router-link>`: 该标签是一个 vue-router 已经内置的组件, 它会被渲染成一个 `<a>` 标签
        * `<router-view>`: 该标签会根据当前的路径, 动态渲染出不同的组件
        * 网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和 `<router-view>` 处于同一个等级
        * 在路由切换时, 切换的是 `<router-view>` 挂载的组件, 其他内容不会发生改变.

      ```js
        import Vue from 'vue'
        import VueRouter from 'vue-router'
        Vue.use(VueRouter)
      ```

    * 路由的默认路径
      * 我们这里还有一个不太好的实现:
        * 默认情况下, 静茹网站的首页, 我们希望 `<router-view>` 渲染首页的内容
        * 但是我们的实现中, 默认没有显示首页组件, 必须让用户点击才可以
      * 如何让 __路劲__ 默认跳到  __首页__, 并且 `<router-view>` 渲染首页组件呢?
        * 非常简单, 我们只需要多配置一个映射就可以了

        ```js
          const routes = [
            {
              path: '/', // '' '/' 都可
              redirece: '/home'
            }
          ]
        ```

        * 配置解析
          * 我们在 routes 中又配置了一个映射
          * path 配置的是根路径: `/`
          * redirect 是重定向, 也就是我们将根据根路径重定向到 `/home` 的路径下, 这样就可以得到我们想要的结果了

    * `<router-link>` 标签的补充
      * 在上面的 `<router-link>` 中, 我们只是使用了一个 <span  style="color:#ff0000"> 属性: to </span>
      * 其他属性:
        * <span  style="color:#ff0000"> tag: </span> tag 可以指定 `<router-link>` 之后渲染成上面组件, 比如 `<router-link to='/home' tag='button'>` 会被渲染成一个 `<button>` 元素, 而不是 `<a>`
        * 在 `<router-link>` 中加入 `replace` 属性, 将无法返回
        * 当前选中的 `<router-link>` 会在标签上自动加上 class 类名: `router-link-active`, 修改默认选中类名: 在属性中加入 `active-class="xxx"` (该方法只会单独修改某个), 批量改: 在 路由的 index.js 中, 添加属性: `linkActiveClass: 'acitve'`

* vue-router 嵌套路由

* vue-router 参数传递

* vue-router 导航守卫

* keep-alive
