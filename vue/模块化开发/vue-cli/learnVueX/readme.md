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
    * 通过 `this.$sore.commit('mutation 中指定的方法')` 来修改状态

* 注意事项:
  * 我们通过提交 mutation 的方式, 而并非直接改变 store.state.count
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
  * Mutation(修改状态)
    * Vuex 的 store 状态的更新唯一方式: __提胶片 Mutation__
    * Mutation 主要包含两部分:
      * 字符串的 __事件类型(type)__
      * 一个 __回调函数(handler)__, 该回调函数的第一个参数就是 state
    * Mutation 的定义方式

      ```js
      mutation: {
        increment(state) {
          state.count++
        }
      }
      ```

    * 通过 Mutation 更新

      ```js
        incrementInComponents: function() {
          this.$store.commit('increment')
        }
      ```

    * Mutation 传递参数
      * 在通过 mutation 更新数据的时候, 有可能我们希望携带一些 __额外的参数__
        * 参数被称为是 mutation 的载荷(Payload)

      ```js
        // Mutation 中的代码
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
          // mutation 中的方法
          changeCount(state, payload) {
            state.count = payload.count
          }

          // APP 组件中的代码
          changeCount() {
            this.$store.commit('changeCount', { count: 0 })
          }
        ```

    * Mutation 提交风格
      * 上面的通过 __commit__ 进行提交是一种普通的提交方式
        * ` this.$store.commit(funcName) `
      * 特殊的提交封装

        ```js
          this.$store.commit({
            type: 'funcName',
            count
          })

          // 传入 mutation 中, 接受的参数是一个对象: { type: 'funcName', count: 5 }

        ```

  * Action(针对异步操作)
  * Module
