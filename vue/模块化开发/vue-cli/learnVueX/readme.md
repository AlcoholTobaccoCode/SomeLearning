# VueX

## 了解 VueX

### VueX 是做什么的

* [Vuex 文档](https://vuex.vuejs.org/zh/)

* 官方解释: VueX 是一个专为 Vue.js 应用程序开发的 __状态管理模式__
  * 它采用 <font style="color: red">集中式存储管理</font>, 并以相应的规则保证状态以一种可预测的方式发生变化.
  * VueX 也集成到 Vue 的官方调试工具 *devtools extension*, 提供了诸如零配置的 *time travel* 调试、状态快照导入导出等高级调试功能.

* __状态管理__ 到底是什么
  * __状态管理模式, 集中式存储管理__ 这些名词听起来就非常高大上, 让人捉摸不透
  * 其实, 你可以简单的将其看成把需要多个组件共享的变量去哪里存储在一个对象里面
  * 然后, 将这个对象放在顶层的 Vue 实例中, 让其他组件可以使用
  * 那么, 多个组件是不是就可以共享这个对象中所有变量属性了呢?

* 等等, 如果是这样的话, 为什么官方还要专门出一个插件 VueX 呢? 难道我们不能自己封装一个对象来管理吗?
  * 当然可以, 只是我们要先想象 VueJs 带給我们最大的便利是什么呢? 没错, 就是响应式
  * 如果你自己封装实现一个能不能保证它里面所有的属性做到响应式呢? 当然也可以, 只是自己封装可能稍微麻烦一些.
  * 不用怀疑, VueX 就是为了提供这样一个在多个组件间共享状态的插件, 用它就可以了.

### 管理什么状态呢

* 但是, 有什么状态是需要我们在多个组件间共享的呢?
  * 如果你做过大型开发, 你一定遇到过多个状态, 在多个界面间的共享问题.
  * 比如用户的登录状态、用户名称、头像、地理位置信息等等.
  * 比如商品的收藏、购物车中的物品等等.
  * 这些状态信息, 我们都可以放在统一的地方, 对它进行保存和管理, 而且它们还是响应式的.
  * 需要在多个界面共享的数据.

* OK, 从理论上理解了状态管理之后, 让我们从实际的代码再来看看状态管理.
  * __Talk is cheap, show me the code.  ---- Linus__

### 单页面的状态管理

* 我们知道, 要在单个组件中进行状态管理是一件非常简单的事情
  * 来看下面的流程

  ```text
        ______ Actions _____
        ↑                   |
        |                   ↓
        view ←------------ state

  ```

* 上述流程怎么理解
  * State: 不用多说, 就是我们的状态(姑且可以当做就是 data 中的属性)
  * View: 视图层, 可以针对 State 的变化, 显示不同的信息
  * Actions: 这里的 Actions 主要是用户的各种操作: 点击、输入等, 会导致状态的改变

### 多页面状态管理

* Vue 已经帮我们做好了单个界面的状态管理, 但是如果是多个界面呢?
  * 多个视图都依赖同一个状态(一个状态改了, 多个界面需要进行更新)
  * 不同界面的 Actions 都想修改同一个状态( Home.vue 需要修改, Profile.vue 也需要修改这个状态)

* 也就是说对于某些状态(状态1/状态2/状态3)来说只属于我们某一个视图, 但是也有一些状态(状态a/状态b/状态c)属于多个视图共同想要维护的
  * 状态1/状态2/状态3 你放在你自己的房间中, 你自己管理自己用, 没问题
  * 但是 状态a/状态b/状态c 我们虚妄交給一个大管家来统一帮助我们管理
  * 没错, vuex 就是为我们提供这个大管家的工具

* 全局单例模式(大管家)
  * 我们现在要做的就是将共享的状态抽取出来, 交給我们的大管家,统一进项管理
  * 之后, 你们每个视图, 按照我 __规定好的__ 规定, 进行访问和修改等操作
  * 这就是 vuex 背后的基本思想

* 使用 Vuex 中的变量

  * 代码示例
  
  ```vue
  <!-- 组件中 -->
  <template>
    <div id="app">
    <p>{{ count }}</p>
    <button @click="addInApp"> + </button>
    <button @click="minInApp"> - </button>
    </div>
  </template>

  <script>
    export default {
      name: 'App',
      components: {},
      computed: {
        count () => {
          return this.$store.count
        }
      },
      methods: {
        addInApp() {
          this.$store.commit('increment')
        },
        minInApp() {
          this.$store.commit('decrement')
        }
      }
    }
  </script>

  ```

  ```js

  // vuex 中
  import Vue from 'vue'
  import Vuex from 'vuex'

  // 1. 安装插件
  Vue.use(Vuex)

  // 2. 创建对象
  count store = new Vuex.Store({ // 里面的值是固定的
    state: { // 状态
      count: 1000
    },
    mutations: {
      addCount(state) {
        state.count++
      },
      minCount(state) {
        state.count--
      },
    }
  })

  ```

* 以上就是使用 Vuex 最简单的方式了

* 我们来对使用步骤, 做一个简单的小结:
  * 1. 提取出一个公共的 store 对象, 用于保存在多个组件中共享的状态
  * 2. 将 store 对象放置在 new Vue 对象中, 这样可以保证在所有的组件中都可以使用到
  * 3. 在其他组件中使用 store 对象中保存的状态即可
    * 通过 `this.$store.state.属性` 的方式来访问状态
    * 通过 `this.$sore.commit('mutations 中指定的方法')` 来修改状态

* 注意事项:
  * 我们通过提交 mutations 的方式, 而并非直接改变 store.state.count
  * 这是因为 Vuex 可以更明确的追踪状态的变化, 所以不要直接改变 store.state.count 的值

### Vuex 核心概念

* Vuex 有几个比较核心的概念:

  * State(状态)
    * __单一状态树__
      * Vuex 提出使用单一状态树, 什么是单一状态树呢?
        * 英文名称是 Single Source of Truth, 也可以翻译成单一数据源
      * 但是, 它是什么呢? 我们来看一个生活中的例子
        * 我们知道, 在国内有很多的信息需要被记录, 比如上学时的个人档案, 工作后的社保记录, 公积金记录等
        * 这些信息被分散在很多地方进行管理, 有一天你需要办理某个业务时(比如入户某个城市), 你会发现你需要到各个对应的工作地点去打印、盖章各种资料信息, 最后到一个地方提证明你的信息无误
        * 这种保存信息的方案, 不仅低效, 而且不方便管理, 以及日后的维护也是一个庞大的工作(需要大量的各个部门的人类维护, 当然国家目前已经在完善我们的系统了)

  * Getters(类似计算属性)
    * Getters 的基本使用
      * 有时候, 我们需要从 store 中获取一些 state 变异后的状态, 比如下面的 Store 中:

      ```js
      const store = new Vuex.Store({
        state: {
          students: [
            {id: 110, name: 'why', age: 18},
            {id: 111, name: 'duQingShan', age: 19}
          ]
        }
      })

      getters: {
        greaterAgesCount: state => {
          return state.students.filter(s => s.age >= 20).length
        }
      }

      computed: {
        getGreaterAgesCount() {
          return this.$store.state.students.filter(age => age >= 20).length
        }
      }

      ```

      * Getters 作为参数和传递参数
        * 如果我们已经有了一个获取所有年龄大于 20 岁学生列表的 getters, 那么代码可以这样来写

        ```js
        getters: {
          greaterAgesStus: state => {
            return state.students.filter( s => s.age >= 20 )
          },
          greaterAgesCount: (state, getters) => {
            return getters.greaterAgesCount.length
          }
        }
        ```

      * getters 默认是是不能传递参数的, 如果希望传递参数, 那么只能让 getters 本身返回另一个函数.
        * 比如上面案例中, 我们希望根据 ID 获取用户的信息

        ```js
        getters: {
          stuById: state => {
            return id => {
              return state.students.find(s => s.id === id)
            }
          }
        }
        ```
  
  * Mutations(修改状态)
    * Vuex 的 store 状态的更新唯一方式: __提交 Mutations__
    * Mutations 主要包含两部分:
      * 字符串的 __事件类型(type)__
      * 一个 __回调函数(handler)__, 该回调函数的第一个参数就是 state
    * Mutations 的定义方式

      ```js
      mutations: {
        increment(state) {
          state.count++
        }
      }
      ```

    * 通过 Mutations 更新

      ```js
        incrementInComponents: function() {
          this.$store.commit('increment')
        }
      ```

    * Mutations 传递参数
      * 在通过 mutations 更新数据的时候, 有可能我们希望携带一些 __额外的参数__
        * 参数被称为是 mutations 的载荷(Payload)

      ```js
        // Mutations 中的代码
        decrement(state, n) {
          state.count -= n
        }

        // APP 组件中的代码
        decrement() {
          this.$store.commit('decrement', 2)
        }
      ```

      * 但如果参数不是一个呢?
        * 比如我们有很多参数需要穿度
        * 这个时候, 我们通常会以对象的形式传递, 也就是 payload 是一个对象
        * 这个时候可以再从对象中取出相关信息

        ```js
          // mutations 中的方法
          changeCount(state, payload) {
            state.count = payload.count
          }

          // APP 组件中的代码
          changeCount() {
            this.$store.commit('changeCount', { count: 0 })
          }
        ```

    * Mutations 提交风格
      * 上面的通过 __commit__ 进行提交是一种普通的提交方式
        * ` this.$store.commit(funcName) `
      * 特殊的提交封装: Vue 还提供了另外一种风格, 它是一个包含 type 属性的对象

        ```js
          this.$store.commit({
            type: 'funcName',
            count
          })

          // 传入 mutations 中, 接受的参数是一个对象: { type: 'funcName', count: 5 }

        ```

      * Mutations 中的处理方式是将整个 commit 的对象作为 payload 使用, 所以代码没有改变, 依然如下

        ```js
          changeCount(state, payload) {
            state.count = payload.count //* 关联上面代码示例
          }
        ```

    * Mutations 的响应规则
      * Vuex 的 store 是响应式的, 当 state 中的数据发生改变, Vue 组件会自动更新
      * 这就要求我们必须遵守一些 Vuex 对应的规则:
        * __提前__ 在 store 中初始化好所需的属性
        * 当給 state 中的对象添加新属性时, 使用下面的方式:
          * 方式一: 使用 Vue.set(obj, 'newProp', 123)
          * 方式二: 用新对象給就对象重新赋值
      * 我们来看一个例子
        * 当我们点击更新信息时, 界面并没有发生对应改变
      * 如何才能让它改变呢?
        * 查看下面代码的方式一、方式二和方式三, 都可以让 state 的属性是响应式的

        ```js
          mutations: {
            updateInfo(state, payloadd) {
              //* 方式一:
              Vue.set(state.info, 'height', payload.height);
              //* 方式二:
              state.info = { ...state.info, 'height': payload.height };
              //* 方式三
              Vue.delete(state.info, 'age');
            }
          }

        ```

    * Mutations 常量类型 - 代码

      ```js
        //* mutations-types.js
        export const UPDATE_INFO = 'UPDATE_INFO'

        //* store/index.js
        import * as types from '@/store/mutations-types.js'

        mutations: {
          [types.UPDATE_INFO](state, payload) {
            //* ...
          }
        }

        //* xx.vue
        <script>
          import {UPDATE_INFO} from '@/store/mutations-types';

          methods: {
            updateInfo() {
              this.$store.commit(UPDATE_INFO, {height: 1.88})
            }
          }
        </script>
      ```

    * Mutations 同步函数
      * 通常情况下, Vuex 要求我们 Mutations 中的方法必须是同步方法
        * 主要的原因是当我们使用 devtools 时, 可以 devtools 可以帮助我们捕捉 mutations 的快照
        * 但是如果是异步操作, 那么 devtools 将不能很好的追踪这个操作什么时候会被完成

  * Action(针对异步操作)
  
    * 我们强调, 不要在 Mutations 中进行异步操作
      * 但是某些情况, 我们确实希望在 Vuex 中进行一些异步操作, 比如网络请求, 必然是异步的, 这个时候怎么处理呢?
      * Action 类似于 Mutations, 但是是用来代替 Mutations 进行异步操作的

    * Action 的基本使用代码如下:

    ```js
      updateInfo() {
        let uInfo = {
          name: this.cInfo,
          address: this.address,
          success: 'success'
        }
        this.$store.dispatch(aUpdateInfo, {
          uInfo,
          success: () => {
            console.info('success')
          }
        }); //* dispatch: 提交数据并调用在 Action 中的方法
      });

      [aUpdateInfo](context, payload) { //* context --> 上下文
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit(updateInfoInStore, payload);
            resolve(payload.success);
          }, 1500);
        }); //* 在 action 中
      }
    ```

  * Module
    * 认识 Module
      * Module 是模块的意思, 为什么在 Vuex 中我们要使用模块呢?
        * Vue 使用单一状态树, 那么也意味着很多状态都会交給 Vuex 来管理
        * 当应用变得非常复杂时, store 对象就有可能变得相当臃肿
        * 为了解决这个问题, Vuex 允许我们将 store 分割成模块(Module), 而每个模块拥有自己的 state、mutations、action、getters 等

    * 我们按照什么样的方式来组织模块呢?
      * 我们来看下方的代码

      ```js
        const moduleA = {
          state: { /* ... */ },
          mutations: { /* ... */ },
          actions: { /* ... */ },
          getters: { /* ... */ }
        }

        const moduleB = {
          state: { /* ... */ },
          mutations: { /* ... */ },
          actions: { /* ... */ },
          getters: { /* ... */ }
        }

        const store = new Vuex.Store({
          modules: {
            a: moduleA,
            b: moduleB
          }
        })

        store.state.a; //* -> moduleA 的状态
        store.state.b; //* -> moduleB 的状态
      ```

    * Module 局部状态
      * 我们在 moduleA 中添加 state、mutations、getters
      * mutations 和 getters 接收的第一个参数是局部状态对象
      * __注意:__ 我们在 modules 中定义的 mutations、 getters 方法, 在调用的时候依然是通过 `this.$store` 来直接调用的

    * Actions 的写法
      * Actions的写法呢? 接收一个 context 参数对象
        * 局部状态通过 context.state 暴露出来, 根节点状态则为 content.rootState

        ```js
          //* 示例, 对象的解构:
          const obj = {
            name: 'duQingShan',
            age: 18,
            height: 1.88
          }
          const {name, height, age} = obj;

          const moduleA = {
            // ...
            actions: {
              incrementIfOddOnRootState ({ state, commit, rootState}) { // 这三个参数是从 context 中解构出来的
                if ((state.count + rootState.count) % 2 === 1) {
                  commit('increment)
                }
              }
            }
          }
        ```

      * 如果 getters 中也需要使用全局的状态, 可以接收跟多的参数

      ```js
        const moduleA = {
          // ...
          getters: {
            sumWithRootCount( state, getters, rootState) {
              return state.count + rootState.count
            }
          }
        }
      ```

  * 项目结构
    * 当我们的 Vuex 帮助我们管理过多的内容时, 好的项目结构可以让我们的代码更加清晰

      ```txt
        --- index.html
        --- main.js
        --- api
            --- 抽取出的 API 请求
        --- components
            --- APP.vue
            --- ...
        --- store
            --- index.js //# 我们组装模块并导出的地方
            --- actions.js //# 根级别的 actions
            --- mutations.js //# 根级别的 mutations
            --- modules
            --- cart.js //# 购物车模块
            --- products.js //# 产品模块
      ```

### 网络模块封装

* 选择什么网络模块?
  * Vue 中发送网络请求有非常多的方式, name, 在开发中, 如何选择呢?
    * 选择一: 传统的 Ajax 是基于 XMLHttpRequest(XHR)
      * 为什么不用它呢?
        * 配置和调用方法等非常混乱
        * 编码看起来就非常的蛋疼
        * 所以真是开发中很少直接使用, 而是使用 JQuery-Ajax
    * 选择二: 在前面的学习中, 我们经常会使用 JQuery-Ajax
      * 相对于传统的 Ajax 非常好用
      * 为什么不选择它呢?
        * 首先, 我们先明确一点, 在 Vue 的整个开发中, 都是不需要 JQuery了
        * 那么, 就意味着为了方便我们进行一个网络请求, 特意引用一个 JQuery, 你觉得合理吗?
        * JQuery 的代码 1w+ 行
        * Vue 的代码也才 1w+ 行
        * 完全没有必要为了用网络请求就引用这个重量级的框架
    * 选择三: 官方在 Vue1.x 的时候, 退出了 Vue-resource
      * Vue-resource 的体积相对于 JQuery 小很多
      * 另外 Vue-resources 是官方退出的
      * 为什么不选择它呢?
        * 在 Vue2.0 后, Vue 就在 Github 的 issue 中说明了去掉 Vue-resource, 并且不再支持新的版本时, 也不会再继续更新和维护
        * 对以后的项目开发和维护都存在很大隐患
    * 选择四: 在说明不再继续更新和维护 Vue-resource 的同时, 作者还推荐了一个框架: axios, 为什么不用它呢?
      * axios 有非常多的有点, 并且用起来也非常方便
      * 稍后, 我们对它详细学习。

  * 为什么选择 axios?
    * 为什么选择 axios？
      * 查文档去
    * 功能特点:
      * 在浏览器中发送 XMLHttpRequest 请求
      * 在 node.js 中发送 http 请求
      * 支持 Promise API
      * 拦截请求和响应
      * 转换请求和相应数据
      * and so on..
    * 补充: axios 名称的由来? 个人理解
      * 没有具体的翻译
      * axios: ajax i/o system

### axios

* axios 请求方式
  * axios(config)
    * 设置请求方式, header等
  * axios.request(config)
  * axios.get(url[, config])
  * axios.delete(url[, config])
  * axios.head(url[, config])
  * axios.post(url[, data[, config]])
  * axios.put(url[, data[, config]])
  * axios.patch(url[, data[, config]])

* 发送并发请求
  * 有时候, 我们可能需求同时发送两个请求
    * 使用 axios.all 可以放入多个请求的数组

    ```js
      axios.all([axios({

      }), axios({

      })]).then(res => {
        console.info(res);
      });
    ```

    * axios.all([]) 返回的结果是一个数组, 使用 axios.spread 可将数组 [res1, res2] 展开为 res1, res2

    ```js
      axios.all([axios({

      }), axios({

      })]).then(axios.spread((res1, res2) => {
        console.info(res1);
        console.info(res2);
      }));
    ```

* 全局配置
  * 在上面的示例中, 我们的 BaseURL 是固定的
    * 事实上, 在开发中可能很多参数都是固定的
    * 这个时候我们可以进行一些抽取, 也可以利用 axios 的全局配置

    ```js
      //* 全局配置示例
      axios.defaults.baseURL = '192.168.xxx.xxx:8000';
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

      //* 单独配置示例
      axios({
        baseURL: 'xx',
        timeout: 5000,
        url: 'xx',
        //* ...
      });
    ```

* 常见的配置选项
  * 请求地址
    * `url: 'user',`
  * 请求类型
    * `method: 'get',`
  * 请求根路径
    * `baseURL: 'http://www.mt.com/api',`
  * 请求前的数据处理
    * `transformRequest: [function(data) {}],`
  * 请求后的数据处理
    * `transformResponse: [function(data) {}],`
  * 自定义的请求头
    * `header: {'x-Requested-With': 'XMLHttpRequest'}`
  * URL 查询对象
    * `params: {id: 10}`
  * 查询对象序列化函数
    * `paramsSerializer: function(params){},`
  * request body
    * `data: {key: 'aa'},`
  * 超时设置/s
    * `timeout: 1000,`
  * 跨域是否带 token
    * `withCredentials: false,`
  * 自定义请求处理
    * `adapter: function(resolve, reject) {},`
  * 身份验证信息
    * `auth: { unmae: 'xx', pws: '12'},`
  * 响应数的据格式  json/bold/document
    * `responseType: 'json',`
