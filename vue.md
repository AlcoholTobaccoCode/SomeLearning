/*
-> 前后端分离使用Token 登录解决方案
整理思路: {
	· 首次登录时，后端服务器判断用户账号密码正确后，
	根据用户id、用户名、定义好的密钥、过期时间 生成token，返回给前端；
	· 前端拿到后端返回的 token，存储在localStorage和 Vuex里；
	· 前端每次路由跳转，判断 localStorage 有无 token ，没有则跳转到登录页，
	有则请求获取用户信息，改变登录状态；
	· 每次请求接口，在Axios请求头里携带 token；
	· 后端接口判断请求头里有无 token，没有或者token 过期，返回401；
	· 前端得到 401 状态码，重定向到登录页面。
	(401 状态码: 表示发送的请求需要有通过HTTP认证的认证信息)
}
{
-> vue如何添加请求头(带上token)
 · 第一种方法(全局改变): {
 <script>
	Vue.http.headers.common['token'] = store.state.token;
	// 封装的一个get请求，亲测有用。现在我们项目就是用的这一种
	// data.token = store.state.token;
	Vue.http.headers.common['token'] = store.state.token;
	Vue.http.get(this.host + uri, { params: data, _timeout: 5000})
		.then((response) => {
			const parsedBody = this.parseBody(response);
			success(parseBody);
		}, (response) => {
			error(this.parseBody(response));
		});
 </script>
 }
 -
 · 第二种方法(在Vue实例中设置): {
	<script>
 		let vm = new Vue ({
 			el:'#app',
 			data: {
 				showList: true,
 				title: null
 			},
 			http:{
 				root: '/',
 				headers: {
 					token: token
 				}
 			}
 		})
	</script>
 }
 -
 · 第三种方法(在拦截器中设置 vue interceptors 设置请求头): {
	<script>
		Vue.http.interceptors.push((request, next) => {
			request.headers.set('token', token); // setting request.headers
			next((response) => {
				return response
			})
		})
	</script>
 }
 · 第四种方法(在 main.js 添加过滤器): {
	<script>
		Vue.http.interceptors.push( (request, next) => {
			// request.credentials = true; // 接口每次请求会跨域携带cookie
			// request.method = 'POST'; // 请求方式( get / post )
			// request.headers.set( 'token', '111'); //请求headers 携带参数
			
			next ( function (response) {
				return response;
			})
		})
	</script>
 }
---> Fannie 总结: 
	自家服务器要支持这样传token
	不然会报个错的，像下面这样 ↓: 
	Request header field token is not allowed by Access-Control-Allow-Headers in preflight response.
}








 */


1).vue的模板语法用的是哪个web模板引擎？理解？
: 
-------------------------------------------------
2).vue-model的原理
:v-model本质上就是语法糖，即利用v-model绑定数据后，其实就是即绑定了数据，有添加了一个input时间监听，如下:
<input v-model="searchText">
等价于: 
<input 
 v-bind:value="searchText"
 v-on:input="searchText = $event.target.value"
>
当在组件上时: v-model则会这样
<custom-input
 v-bind:value="searchText"
 v-on:input="searchText = $event"
></custom-input>

当在input元素中使用v-model实现双数据绑定，
实就是在输入的时候触发元素的input事件，
通过这个语法糖，也能够实现父子组件数据的双向绑定，code:
//父组件
<template>
	<div id="app">
		<Children v-model="number"></Children>	
		<div>{{number}}</div>	
	</div>
</template>
<script>
	import	Children from './Children'
	export default {
		data () {
			return {
				number: 0
			}
		},
		name: 'App',
		components: { Children}
	}
</script>
//子组件:
<template>
	<div @click="$emit('input', value+1)">孩子</div>
</template>
<script>
	export default {
		props:["value"]
	}	
</script>
通过v-bind把父组件的数据绑定到了子组件的props属性中，
而在props上默认用value取值，然后通过$emit触发时间input，
因为v-model绑定的事件是input，故在子组件上触发了父组件的input事件，
通过触发时间来进行传值，实现了父子组件数据的双向绑定，
相对于直接使用v-bind以及自定义事件代码量有所减少。
-------------------------------------------------
3).你有使用过vue开发多语言项目吗？说说你的做法？
a.首先安装vue-i18n依赖
b.在src文件夹下新建一个i18n文件夹存放i18n要用的文件
c.新建一个lang文件夹存放语言包
d.创建index.js配置i18n
e.还需要在main.js引入i18n并具名在vue
: 
import i18n from './i18n'  //引入i18n
new Vue ({
	el:"#app",
	router
	i18n, //这里需要具名
	store,
	components: {App},
	template : '<App/>'
})
f.写一个lange.vue来做多语言切换
g.最后在选择确认哪一种语言时
将上面的tyep(eg:cn / en / jp / kr) 存入到i18n 的locale
(防止刷新后所选择的语言包不是当前的语言包)
-------------------------------------------------
4).在使用计算属性时，函数名和data数据源中的数据可以同名吗
:
不能同名，同名会报错" xxx is not function"
-------------------------------------------------
5).vue中data的属性可以和methods中的方法同名吗？为什么？
不可以。
Vue会把methods和data的东西，全部代理到Vue生成的对象中。
因此this. testname会被覆盖。
-------------------------------------------------
6).怎么给vue定义全局的方法？
// 一、全局引入文件 
// 1.先定义共用组件 common.vue
<script>
	// 定义一些公共的属性个方法
const httpUrl = "localhost:8081"
function commonFun () {
	console.log("Common function")
}
// 暴露出这些属性和方法
export default {
	httpUrl,
	commonFun
}
</script>
// 2.在需要使用的地方导入
<script>
	// 导入共用组件‘
import global from './common'
export default {
	data () {
		return {
			userName: "",
			passWord: "",
			// 赋值使用
			globalhttpurl: global.httpurl
		}
	}
}
</script>
// 3.使用
<template>
	<div>{{globalhttpurl}}</div>
</template>
// 二、main.js 中引入全局变量和方法
// 1.定义共同组件，同上
// 2.main.js 中引入并赋值給vue
// 导入共用组件
import global from '/common'
Vue.prototype.COMMON = global
// 3.使用
export default {
	data () {
	userName:"",
	pwd:"",
	globalHttpUrl:this.COMMON.httpUrl
}
}
-------------------------------------------------
7).vue2.0 不再支持v-html中使用过滤器了怎么办？

// 1.全局方法(推荐)
vue.prototype,msg = function(msg) {
	return msg/replace ("\n","")
}

// 2.commputed属性
let appMain = new Vue ({
	data : {
	content: "xxx"
},
el:"#appMain",
computed:{
	content: function(msg) {
	return msg.replace("\n","")
}
}
})

// 3.$options.filters
在定义的vue里的filter添加方法
let appMain = new Vue ({
	el:"#appMain",filters: {
	msg:function(msg) {
	return msg.replace (/\n/g,"")
}
},
data : {
	content: "xxx"
}
})

-------------------------------------------------
8).如何解决vue打包之后静态资源图片失效的问题？
 -> 解决方法之一:  静态资源 static 存放位置放在src目录下
 -> 注意不能把 static/imgs/user.png 写成
 			 /static/imgs/user.png 1否则图片还是失效
-------------------------------------------------
9).vue 动态设置img的src地址无效的问题:
<img :src="logo" class="logo" alt="logo">
<script>
	export default {
		data () {
			return {
				logo: require('./../assets/imgs/logo.png'),
			};
		}
	};
</script>
因为动态添加src被当做静态资源处理了，没有进行编译
所以要加上require
-------------------------------------------------
10).使用vue吼怎么针对搜索引擎做SEO优化？
http://www.solves.com.cn/it/wlyx/SEO/2019-08-08/2962.html
-------------------------------------------------
11).跟keep-alive有关的生命周期是哪些？描述下这些生命周期
 -> 1.activated: 页面第一次进入的时候，钩子触发的顺序是: created -> mounted -> activated
 -> 2.deactivated: 页面退出的时候回触发deactivated，当再次前进或者后退的时候朱触发activated
-------------------------------------------------
12).如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由
angularjs: {
	缺点: [
		1.是一个强约束性的框架，需要良好的开发习惯;
		2.需要一定的基础知识，比如TS;
		3.概念较多，但很少有新概念
	],
	优点: [
		1.强约束性的框架，写的太烂的程序没法上线;
		2.对于Java/C#程序员来说语法相似很友好;
		3.基础设施简单，一个NodeJS和Angular CLI可以满足开发所需一切;
		4.强力的表单支持;
		5.对语义化版本规范的坚持让你能无痛升级;
		6.Google颞部的600多个项目都在使用Angular，
		这意味着任何一个版本在推出之前都会经历600多个
		项目的长时间考验。
	]
}

vue: {
	缺点: [
		1.Vue把通用功能封装的太全了，反而让我们不容易去分析框架底层的实现
	],
	优点: [
		1.Vue中封装了非常多的API，文档很全;
		2.内置了自己的脚手架工具;
	]
}

React: {
	缺点: [
		1.
	],
	优点: [
		1.提倡尽量少的API，所以React上手开发很快;
		2.接口少，更偏向于底层
	]
}
-------------------------------------------------
13).Vue兼容性: 
:Vue不支持IE8及以下版本，因为Vue使用了IE8无法模拟的ES5特性，
但它支持所有兼容ES5的浏览器
但其实使用VUe-cli构建的项目也还是不能在ie8(9、10、11)
以上版本中运行
所以需要babel
-------------------------------------------------
14).使用vue开发一个todo小应用，谈一下你的思路
 -> 原型设计 {
	name
	原型图
 }
 -> 交互设计
 -> 开发
 -> 渐进增加功能
 -> 打包图标
 -> 用户引导手册
 -> 测试以及多语言支持
-------------------------------------------------
15).你有看过vue推荐的风格指南吗？例句你知道的几条:
1.优先级A的Code Style
 a.vue组件名推荐由多个单词构成，且开头大写 {
 	为了避免vue组件名和未来html元素的名称重复，因为html的标签都是单个单词
}
 b.组件data数据推荐用函数return {
 	除了跟组件之外，其他的vue组件可能被复用，如果data是{}，那么这些组件的数据会相互影响。
 	但是我们希望每一个组件，即便是被复用的组件，每个组件的datat都应该是独立的状态
}
 c.props推荐更加详细的定义:type/default/require等 {
 	// 很好的理解，详细的约定肯定比简写的约定更可靠
 props: {
	name: {
		tyep:String,
		default: 'ziwei',
		required: true
	}
 }
--
props:['name'] // 不推荐
}
 d.v-for推荐有配套的:key  {
 为了更加高效的渲染dom，vue有”就地复用“的策略。
 比如一个列表的数据没变，只是顺序发生了改变，如果所有列表的dom重新渲染就很“浪费”
 但是通过唯一的:key复用之前的dom的话，性能就好很多
}
 e.v-for和v-if避免同在一起 {
 这里推荐看文档，栗子和解释都很清晰。v-for和v-if同时出现的话，先v-for，后v-if
 有v-for 和 v-if 同时写到li上的情况有两种:
  -> 如果是希望控制ul的显示/隐藏，推荐放到ul上，而不是li上。这样“节省”了li的渲染；
  -> 如果是因为根据条件控制部分li的显示/隐藏，建议用把ul数据对象改成计算属性。
}
 f.vue组件样式推荐设置作用域 {
 可以使用 scrped 和css module。
 但两者还是有一些区别的。
 -> scoped被设计的初衷是不能让当前组件的样式，影响其他组件的样式，
 所以你写组件库的话，不要用scoped
 -> css module是利用命名空间和hash 来保证作用域
}
 g.自定义的私有属性，推荐$_ + 命名空间作为前缀 {
 我理解这里，就是如果你要第三方插件或者，要自定义vue属性时。
 vue給你推荐了一种命名空间，比如这样定义:($_ myUtils_sayHi)
}
-------------------------------------------------
16).vue1.x 与 vue2.x 的差异
 -> 模板 {
 	v2 每个组件只允许有一个根元素，v1允许有多个
}
 -> 声明周期钩子函数 有所改变
 -> v-for {
	参数顺序变化: [
		v1:{
			数组: (index, value)
			对象: (key,value)
		},
		v2: {
			数组: (value,index)
			对象: (value,key)
		}
	]
}
 -> 范围变更 {
	number in 10 : [
		v1: { 0-9 },
		v2: { 1-10 }
	] 
}
 -> props ..
 And so on...
 https://segmentfault.com/a/1190000014460870

-------------------------------------------------
17).你知道vue中key的原理吗，说说你对它的理解
:vue中key的作用是: key 是为Vue中vnode的唯一标记，
通过这个key，我们的diff操作可以更准确，更快速
-------------------------------------------------
18).Vue中data重置问题:
可以使用Object.assign(this.$data,this.$options.data())
就可以将当前状态的data重置为初始状态
{
<script>
export default {
	data () {
		return {
			systemInfoArr: [],
			unitListArr: [],
			formSelectObj: { // 业务系统列表
				name: "systemInfo",
				arr:[],
				selectval:'',
				value:'',
				curSelect:null
			},
			unitList: { //用户配置系统
				name:'unitList',
				arr:[],
				selectVal:'',
				value:'',
				curSelect: null
			}
		}
	},
	methods(){
		// 1.
		Object.assign(this.$data.formSelectObj, this.$options.data())
		// 这里重置 formSelectObj 数据，其他不受影响
		// 2.
		Object.assign(this.$data, this.$options.data())
		// 这里重置data下所有数据
	}
}	

</script>
}
-------------------------------------------------
19).vue渲染模板时怎么保留模板中的HTML注释呢？
#comments 2.4.0新增 {
	类型: boolean
	默认值: false
	限制: 这个选项只在完整构建版本中的浏览器内编译时可用
	详细: 
		当设为 true 时,将会保留且渲染模板中的HTML注释。
		默认行为是舍弃他们。
}
 -> 如何设置 {
 // 首先设置 comments 为true，挂载模板的template上:
 <template comments></template>
<script>
	export default {
		name:"",
		comments:true,
		data () {
			return {}
		}
	}
</script>
}
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).
-------------------------------------------------
15).


{
	-> VueX
->知道什么是VueX吗？
	在SPA单页面组件的开发中,Vue的VueX和React的ReduX都统称为 <同一状态管理>，
  个人的理解是全局状态管理更合适；简单的理解就是你在 state 中定义了一个数据之后，
  你可以在所在项目中的任何一个组件里进行获取、进行修改，并且你的修改可以得到全局的响应变更。
	
	--> 核心概念1: State
	   state 就是Vuex中的公共状态，我是将state 看做是所有组件的data， 用于保存所有组件的公共数据。
	
	--> 核心概念2:  Getters
		我将 getters 属性理解为所有组件的 computed 属性， Vuex的官方文档也是说到
	 可以将getters 理解为 store 的计算属性， getters 的返回值会根据他的依赖被缓存起来，
	 且只有当它的依赖值发生了改变才会被重新计算。

	--> 核心概念3: Mutations
		我将 mutations 理解为 store 中的 methods, mutations 对象中保存着更改数据的回调函数，
	 该函数名官方规定叫 type， 第一个参数是 state， 第二个参数是 payload，也就是自定义的参数。

	--> 核心概念4: Actions
		actions 类似于 mutations， 不同在于: actions 提交的是 mutations，而不是直接变更状态
	 actions 中可以包含异步操作， mutations 中绝对不允许出现异步， 
	 actions 中的回调函数的第一个参数是 context， 是一个与 store 实例具有相同属性和方法的对象
}     


{
	-> vue-router
--> vue-router 怎么重定向页面?
	->
}