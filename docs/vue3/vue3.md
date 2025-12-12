## 1.创建一个 vue 应用程序

### [Vue.js - 渐进式 JavaScript 框架](https://cn.vuejs.org/)

"渐进式"是指可以按需引入Vue.js的部分功能, 而不必全量引入整个框架

```shell
 npm create vite@latest
```

```vue
<template>
  <span @click="clickWelcome">{{ welcome }}</span>
</template>

<script>
// export默认导出
export default {
  // 创建、挂载、更新、卸载
 
    // ES6 简写, 完整写法：data: function data() {}
  data() {
    return {
      welcome: "Hello World"
    }
  },
  methods: {
    // ES6 简写，完整写法: clickWelcome: function clickWelcome() {}
    clickWelcome() {
      this.welcome = "Hello Vue3"
    }
  }
}
</script>

<style scoped></style>
```

## 2.组合式api使用

```vue
<template>
  <span @click="clickWelcome">{{ welcome }}</span>
</template>

<script>
import { ref, } from "vue";

export default {
    setup() {

      //vue3里面给我提供了组合式api    ref基本数据类型
      let welcome = ref("Hello World")
      function clickWelcome() {
        welcome.value = "Hello Vue3"
      }

      /**
       * 注意要将模块中使用到的变量与函数通过return返回出去
       * 
       * { key1: value1,
       *   key2: value2,
       * }
       * ES6特性：当key名称与value名称一致时，可将“key:”省略
       */
      return {welcome, clickWelcome}
    }
}
</script>

<style scoped></style>
```

## 3.ref和reactive

### html

```javascript
<div id="app">
    msg: {{ msg }}

    <h3>web.title: {{ web.title }}</h3>
    <h3>web.url: {{ web.url }}</h3>
    <h3>web.number: {{ number }}</h3>
</div>
```

### js

```javascript
<script type="module">
        setup() {
            const number = ref(10) //ref用于存储单个基本类型的数据, 如:数字、字符串等
            number.value = 20 //使用ref创建的响应式对象, 需要通过.value属性来访问和修改其值

            const web = reactive({ //用于存储复杂数据类型, 如:对象或数组等
                title: "编程",
                url: "baidu.com"
            })
            web.url = "www.pp.com" //使用reactive创建的响应式对象, 可以直接通过属性名来访问和修改值

            return {
                msg: "success",
                number,
                web
            }
        }
</script>
```

## 4.绑定事件 v-on 简写@

### html

```javascript
<div id="app">
    <h3>{{ msg }}</h3>
    <h3>{{ web.url }}</h3>
    <h3>{{ web.user }}</h3>
    <h3>{{ sub(100, 20) }}</h3>

    <!-- v-on:click 表示在 button 元素上监听 click 事件 -->
    <button v-on:click="edit">修改</button> <br>

    <!-- @click 简写形式 -->
    <button @click="add(20, 30)">加法</button> <br>

    <!-- 
        enter space tab 按键修饰符
        keyup是在用户松开按键时才触发
        keydown是在用户按下按键时立即触发
    -->
    回车 <input type="text" @keyup.enter="add(40, 60)"> <br>
    空格 <input type="text" @keyup.space="add(20, 30)"> <br>
    Tab <input type="text" @keydown.tab="add(10, 20)"> <br>
    w <input type="text" @keyup.w="add(5, 10)"> <br>

    <!-- 组合快捷键 -->
    Ctrl + Enter <input type="text" @keyup.ctrl.enter="add(40, 60)"> <br>
    Ctrl + A <input type="text" @keyup.ctrl.a="add(20, 30)">
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'
    
    createApp({
        setup() {
            const web = reactive({
                title: "编程",
                url: "pp.com",
                user: 0
            })

            const edit = () => {
                web.url = "www.pp.com"
                //msg = "编程" //错误示例 不能直接改变msg的值,因为msg是一个普通变量, 不是响应式数据
            }

            const add = (a, b) => {
                web.user += a + b
            }

            const sub = (a, b) => {
                return a - b
            }

            return {
                msg: "success", //普通变量, 非响应式数据, 在模板中普通变量不会自动更新
                web, //响应式数据
                edit, //方法
                add,
                sub,
            }
        }
    }).mount("#app")

</script>
```

## 5.显示和隐藏 v-show

### html

```javascript
<div id="app">
    <h3>{{ web.show }}</h3>
    <p v-show="web.show">编程 pp.com</p>

    <button @click="toggle">点击切换显示状态</button>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'
    
    createApp({
        setup() {
            const web = reactive({
                show: true
            })

            const toggle = () => {
                web.show = !web.show
            }

            return {
                web,
                toggle
            }
        }
    }).mount("#app")

</script>
```

## 6.条件渲染 v-if

### html

```javascript
<div id="app">
    <h3>{{ web.show }}</h3>
    <p v-show="web.show">编程</p>
    <p v-if="web.show">pp.com</p>

    <button @click="toggle">点击切换显示状态</button>

    <p v-if="web.user < 1000">新网站</p>
    <p v-else-if="web.user >= 1000 && web.user < 10000">优秀网站</p>
    <p v-else-if="web.user >= 10000 && web.user < 100000">资深网站</p>
    <p v-else>超级网站</p>
</div>
```

### js

```javascript
<script type="module">
    /*
        v-show 通过 css display属性 来控制元素的显示或隐藏
        v-if 用于对元素进行条件渲染. 当条件为 true 时, 渲染该元素, 为 false 时, 则不渲染

        v-show 适用于频繁切换元素的显示状态, 因为只改变 display 属性, 不需要重新渲染整个组件
        v-if 适用于较少改变的场景, 因为频繁从 dom 中删除或添加元素, 会导致性能下降
    */
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const web = reactive({
                show: true,
                user: 500
            })

            const toggle = () => {
                web.show = !web.show
            }

            return {
                web,
                toggle
            }
        }
    }).mount("#app")
</script>
```

## 7.动态属性绑定 v-bind 简写：

### html

```javascript
<div id="app">
    <!-- :value -->
    <h3>value="pp.com"</h3>
    <input type="text" value="pp.com">

    <h3>v-bind:value="web.url"</h3>
    <input type="text" v-bind:value="web.url">

    <h3>简写 :value="web.url"</h3>
    <input type="text" :value="web.url">

    <!-- :src -->
    <h3>src="windows.jpg"</h3>
    <img src="windows.jpg">

    <h3>:src="web.img"</h3>
    <img :src="web.img">

    <!-- :class -->
    <h3>class="textColor"</h3>
    <b class="textColor">编程</b>

    <h3>:class="{textColor:web.fontStatus}"</h3>
    <b :class="{textColor:web.fontStatus}">pp.com</b>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const web = reactive({
                url: "www.pp.com",
                img: "windows.jpg",
                fontStatus: true
            })

            return {
                web
            }
        }
    }).mount("#app")
</script>
```

## 8.遍历数组或对象 v-for

### html

```javascript
<div id="app">
    <ul>
        <li v-for="(value, index) in data.number">
            index=> {{ index }} : value=> {{ value }}
        </li>
    </ul>

    <ul>
        <li v-for="value in data.user">
            value=> {{ value }}
        </li>
    </ul>

    <ul>
        <li v-for="(value, key) in data.user">
            key=> {{ key }} : value=> {{ value }}
        </li>
    </ul>

    <ul>
        <li v-for="(value, key, index) in data.user">
            index=> {{ index }} : key=> {{ key }} : value=> {{ value }}
        </li>
    </ul>

    <ul>
        <!-- <template> 标签可以用来包装多个元素或者多行代码, 不会在页面中渲染  -->
        <template v-for="(value, key, index) in data.user">
            <li v-if="index == 1">
                index=> {{ index }} : key=> {{ key }} : value=> {{ value }}
            </li>
        </template>
    </ul>

    <ul>
        <!-- :key="value.id" 为 每个 li 元素设置一个唯一的 key 值 -->
        <li v-for="(value, index) in data.teacher" :title="value.name" :key="value.id">
            index=> {{ index }} : value.id=>{{ value.id }} value.name=>{{ value.name }} value.web=>{{ value.web }}
        </li>
    </ul>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const data = reactive({
                number: ["十", "十一", "十二"], //数组
                user: { //对象
                    name: "Luna",
                    gender: "女"
                },
                teacher: [ //包含两个对象的数组
                    { id: 100, name: "编程", web: "pp.com" },
                    { id: 101, name: "David", web: "www.pp.com" }
                ]
            })

            return {
                data
            }
        }
    }).mount("#app")
</script>
```

## 9.双向数据绑定 v-model

### html

```javascript
<div id="app">
    <h3>文本框 {{ data.text }}</h3>
    <h3>单选框 {{ data.radio }}</h3>
    <h3>复选框 {{ data.checkbox }}</h3>
    <h3>记住密码 {{ data.remember }}</h3>
    <h3>下拉框 {{ data.select }}</h3>

    <!-- 单向数据绑定 当数据发生改变时, 视图会自动更新. 但用户手动更改 input 的值, 数据不会自动更新 -->
    单向数据绑定 <input type="text" :value="data.text">

    <hr>
    <!-- 
        双向数据绑定 当数据发生改变时, 视图会自动更新. 当用户手动更改 input 的值, 数据也会自动更新
        对于 <input type="text">, v-model 绑定的是 input 元素的 value 属性
     -->
    双向数据绑定 <input type="text" v-model="data.text">

    <hr>
    <!-- 
        单选框
        对于 <input type="radio">, v-model 绑定的是 input 元素的选中状态
     -->
    <input type="radio" v-model="data.radio" value="1">写作
    <input type="radio" v-model="data.radio" value="2">画画

    <hr>
    <!-- 
        复选框
        对于 <input type="checkbox">, v-model 绑定的是 input 元素的选中状态
     -->
    <input type="checkbox" v-model="data.checkbox" value="a">写作
    <input type="checkbox" v-model="data.checkbox" value="b">画画
    <input type="checkbox" v-model="data.checkbox" value="c">运动

    <hr>
    <!-- 记住密码 -->
    <input type="checkbox" v-model="data.remember">记住密码

    <hr>
    <!-- 
        下拉框
        对于 <select>, v-model 绑定的是 select 元素的选中状态
     -->
    <select v-model="data.select">
        <option value="">请选择</option>
        <option value="A">写作</option>
        <option value="B">画画</option>
        <option value="C">运动</option>
    </select>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const data = reactive({
                text: "pp.com", //文本框
                radio: "", //单选框
                checkbox: [], //复选框
                remember: false, //单个复选框-记住密码
                select: "" //下拉框
            })

            return {
                data
            }
        }
    }).mount("#app")
</script>
```

## 10.v-model修饰符

### html

```javascript
<div id="app">
    <h3>url: {{ web.url }}</h3>
    <h3>user: {{ web.user }}</h3>

    实时渲染 <input type="text" v-model="web.url"> <br>

    在失去焦点或按下回车键之后渲染 <input type="text" v-model.lazy="web.url"> <br>

    <!-- 输入 100人, web.user 的值仍为 100 -->
    输入框的值转换为数字类型 <input type="text" v-model.number="web.user"> <br>

    去除首尾空格 <input type="text" v-model.trim="web.url">
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const web = reactive({
                url: "pp.com",
                user: 10
            })

            return {
                web
            }
        }
    }).mount("#app")
</script>
```

## 11.渲染数据 v-text 和 v-html

### html

```javascript
<div id="app">
    <h3>{{ web.title }}</h3>

    <!-- v-text 将数据解析为纯文本格式 -->
    <h3 v-text="web.title"></h3>

    <!-- v-html 将数据解析为 html 格式 -->
    <h3 v-html="web.url"></h3>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive } from './vue.esm-browser.js'

    createApp({
        setup() {
            const web = reactive({
                title: "编程",
                url:"<i style='color:blue;'>www.pp.com</i>"
            })

            return {
                web
            }
        }
    }).mount("#app")
</script>
```

## 12.计算属性 computed

### html

```javascript
<div id="app">
    <h3>add: {{ add() }}</h3>
    <h3>add: {{ add() }}</h3>

    <h3>sum: {{ sum }}</h3>
    <h3>sum: {{ sum }}</h3>

    x <input type="text" v-model.number="data.x"> <br>
    y <input type="text" v-model.number="data.y">
</div>
```

### js

```javascript
<script type="module">
    import { createApp, reactive, computed } from './vue.esm-browser.js'

    createApp({
        setup() {
            const data = reactive({
                x: 10,
                y: 20
            })

            //方法-无缓存
            let add = () => {
                console.log("add") //打印两次
                return data.x + data.y
            }

            //计算属性-有缓存 [计算属性根据其依赖的响应式数据变化而重新计算]
            const sum = computed(() => {
                console.log("sum") //打印一次
                return data.x + data.y
            })

            return {
                data,
                sum,
                add
            }
        }
    }).mount("#app")
</script>
```

## 13.侦听器 watch

### html

```javascript
<div id="app">
    爱好
    <select v-model="hobby">
        <option value="">请选择</option>
        <option value="1">写作</option>
        <option value="2">画画</option>
        <option value="3">运动</option>
    </select>

    <hr>

    年
    <select v-model="date.year">
        <option value="">请选择</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
    </select>

    月
    <select v-model="date.month">
        <option value="">请选择</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
</div>
```

### js

```javascript
<script type="module">
    import { createApp, ref, reactive, watch } from './vue.esm-browser.js'

    createApp({
        setup() {
            const hobby = ref("") //爱好
            const date = reactive({ //日期
                year: "2023",
                month: "10"
            })

            //监听 hobby
            watch(hobby, (newValue, oldValue) => {
                console.log("oldValue", oldValue, "newValue", newValue)

                if (newValue == "2") {
                    console.log("画画")
                }
            })

            //监听 date
            watch(date, (newValue, oldValue) => {
                /*
                    JS中对象和数组是通过引用传递的, 而不是通过值传递
                    当修改对象或数组的值时, 实际上修改的是对象或数组的引用, 而不是创建一个新的对象或数组
                    所以，如果修改了对象或数组的值，那么打印出来的结果则是修改后的值
                */
                console.log("oldValue", oldValue, "newValue", newValue)

                if (newValue.year == "2025") {
                    console.log("2025")
                }

                if (newValue.month == "11") {
                    console.log("11")
                }
            })

            //监听 date 中的某个属性 year
            watch(() => date.year, (newValue, oldValue) => {
                console.log("oldValue", oldValue, "newValue", newValue)

                if (date.year == "2024") {
                    console.log("2024")
                }
            })

            return {
                hobby,
                date
            }
        }
    }).mount("#app")
</script>
```

## 14.自动侦听器 watchEffect

### html

```javascript
<div id="app">
    爱好
    <select v-model="hobby">
        <option value="">请选择</option>
        <option value="1">写作</option>
        <option value="2">画画</option>
        <option value="3">运动</option>
    </select>

    <hr>

    年
    <select v-model="date.year">
        <option value="">请选择</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
    </select>

    月
    <select v-model="date.month">
        <option value="">请选择</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
</div>
```

### js

```javascript
<script type="module">
    /*
        watch需要显式指定要监听的属性, 并且只有当监听的属性发生变化时才会执行
        若需要更精细地控制或需要获取到原值, 需要使用watch
    */
    import { createApp, ref, reactive, watchEffect } from './vue.esm-browser.js'

    createApp({
        setup() {
            const hobby = ref("") //爱好
            const date = reactive({ //日期
                year: "2023",
                month: "10"
            })

            //自动监听
            watchEffect(() => {
                console.log("------ 监听开始")

                if (hobby.value == "2") {
                    console.log("画画")
                }

                if (date.year == "2025") {
                    console.log("2025")
                }

                if (date.month == "11") {
                    console.log("11")
                }

                console.log("------ 监听结束")
            })

            return {
                hobby,
                date
            }
        }
    }).mount("#app")
</script>
```
## 15.v-once

```vue
<template>
  <button v-on:click="testVOn">v-on</button>
  <br>
  <br>
  <!--
  v-on:click简写成@click
  如果不显式传参，则会向事件处理函数默认传递事件对象
  -->
  <button @click="testVOn">v-on可以简写成@</button>
  <br>
  <br>
  <!--
  如果显式传参，则不再向事件处理函数默认传递事件对象
  -->
  <button @click='testClick1("testClick1")'>给事件处理函数传参</button>
  <br>
  <br>
   <!--
  可以在模板中通过$event显式访问到事件对象
  -->
  <button @click='testClick2("testClick2", $event)'>给事件处理函数传参</button>

  <!--事件冒泡-->
  <div class="container" @click="clickcontainer">
    <div class="inner" @click.stop="clickInner"></div>
  </div>

  <!--
  事件修饰符
  https://www.yuque.com/yangzhi-u0ca4/dkbbld/cib4y6tnb070tph4
  -->
  <!--v-once-->
  <button @click.once="testVOnce">v-once</button>


</template>
<script setup>
function testVOn(e) {
  console.log("Click v-on", e)
}

function testClick1(p) {
  console.log("Click v-on", p)
}

function testClick2(p, e) {
  console.log("Click v-on", p, e)
}

function clickcontainer() {
  console.log("container is clicked")
}


function clickInner(event) {
  console.log("inner is clicked")
}


function testVOnce() {
  console.log("testVOnce is clicked")

}



</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: greenyellow;
}
.inner {
  width: 100px;
  height: 100px;
  background-color: purple;
}

</style>
```

## 16.v-pre

```vue
<template>
  <!--
  v-once
  功能：
  当元素或组件上添加了v-once指令后，
  Vue只会在首次渲染时解析和渲染这部分内容，
  之后的数据变化将不会触发这部分内容的重新渲染。
  特点：
  v-once 指令用于仅渲染元素一次。
  通过只渲染一个元素一次，可以提高性能。
  当元素具有 v-once 指令时，其所有子元素在第一次渲染后也会变为静态。
  -->
  <div v-once>{{ content }}</div>
  <button @click="clickButton">按钮</button>
  <hr>
  <!--
  v-pre
  功能：
  使用 v-pre 指令时，不会进行编译操作。
  所有的 Vue 模板语法都将得以完整保留，并会按照其初始的形态进行渲染。
  -->
  <div v-pre>{{ content }}</div>

  <!--v-cloak
  用于隐藏内容，直到编译完成。
  通常，v-cloak 会阻止用户在页面加载期间看到预编译内容（包括大括号）的闪烁。
  要隐藏预编译的内容，元素会被标记为 v-cloak，并定义 CSS 规则来隐藏此内容，直到编译完成。-->
  <!--v-cloak案例: https://www.w3ccoo.com/vue/tryit.asp?filename=tryvue_ref_v-cloak2-->

</template>
<script setup>
  import { ref } from 'vue';
  let content = ref('Hello')

  function clickButton() {
    console.log("button is clicked......")
    content.value = "你好"
  }

</script>

<style scoped>
  button{
    margin-top: 20px;
  }
</style>
```

## 组件

1. 官网

​        [https://cn.vitejs.dev](https://cn.vitejs.dev/)

2. 基于Vite创建Vue3项目

​        npm create vite@latest

3. 导入组件

```javascript
<script setup>
  //导入子组件
  //App.vue是父组件,因为它包含了header.vue和footer.vue两个子组件
  import Header from "./components/header.vue"
  import Footer from "./components/footer.vue"
</script>

<template>
  <Header/>

  mi.com
  
  <Footer/>
</template>

<style scoped>

</style>
```

### 父传子 defineProps



App.vue

```javascript
<script setup>
  import { reactive } from 'vue'

  //导入子组件
  //App.vue是父组件,因为它包含了header.vue和footer.vue两个子组件
  import Header from "./components/header.vue"
  import Footer from "./components/footer.vue"

  /*
  const propsWeb = {
    user: 10,
    ip: '127.0.0.1'
  }
  */
  //响应式数据
  const propsWeb = reactive({
    user: 10,
    ip: '127.0.0.1'
  })

  //添加用户
  const userAdd = () => {
    propsWeb.user++
    console.log(propsWeb.user)
  }
</script>

<template>
  <!-- 父传子 - 方式1 -->
  <Header propsName="马斯克" propsUrl="mi.com" />

  mi.com

  <button @click="userAdd">添加用户</button>

  <!-- 父传子 - 方式2 -->
  <!-- <Footer v-bind="propsWeb" /> -->
  <Footer :="propsWeb" />
</template>

<style scoped></style>
```



header.vue

```javascript
<script setup>
    //子组件

    //接收方式1 - 数组
    /*
        defineProps是Vue3的编译时宏函数,
        用于接收父组件向子组件传递的属性(props)

        注
        当使用Vue编译器编译包含defineProps的组件时,
        编译器会将这些宏替换为相应的运行时代码
    */
    const props = defineProps(["propsName","propsUrl"])
    console.log(props)
</script>

<template>
    <h3>Header</h3>
</template>

<style scoped>

</style>
```

footer.vue

```javascript
<script setup>
    //子组件

    //接收方式2 - 对象
    /*
    const props = defineProps({
        user: Number,
        ip: String
    })
    */
    const props = defineProps({
        user: Number,
        ip: {
            type: String,
            required: true, //true表示必传属性,若未传则会提示警告信息
            default: 'localhost' //未传默认值
        }
    })

    console.log(props)
</script>

<template>
    <h3>Footer</h3>
    user: {{ props.user }}
</template>

<style scoped>

</style>
```

### 子传父 defineEmits



App.vue

```javascript
<script setup>
  import { reactive,ref } from 'vue'

  //导入子组件
  import Header from "./components/header.vue"

  //响应式数据
  const web = reactive({
    name: "马斯克",
    url: 'mi.com'
  })

  const user = ref(0)

  //子传父
  const emitsWeb = (data) => {
    console.log("emitsWeb:",data)
    web.url = data.url
  }

  const emitsUser = (data) => {
    console.log("emitsUser:",data)
    user.value += data
  }
</script>

<template>
  <!-- 子传父 -->
  <Header @web="emitsWeb" @user="emitsUser" />

  {{ web.url }} - {{ user }}
</template>

<style scoped></style>
```



header.vue

```javascript
<script setup>
    //子组件

    /*
        defineEmits是Vue3的编译时宏函数,
        用于子组件向父组件发送自定义事件
    */
    //子传父
    //定义一个名为 emits 的对象, 用于存储自定义事件
    const emits = defineEmits(["web","user"])
    //发送名为 web 和 user 的自定义事件
    emits("web", {name:"马斯克",url:"www.mi.com"})
    
    //添加用户
    const userAdd = () => {
        //发送名为 user 的自定义事件
        emits("user", 10)
    }
</script>

<template>
    <h3>Header</h3>

    <button @click="userAdd">添加用户</button>
</template>

<style scoped>

</style>
```

### 跨组件通信-依赖注入

App.vue

```javascript
<script setup>
  import { provide, ref } from 'vue'

  //导入子组件
  import Header from "./components/header.vue"

  //provide用于父组件将 数据 提供给所有子组件
  /*
    若使用了provide和inject来进行数据传递,
    则一般不需要再使用defineProps
  */
  provide("provideWeb",{name:"马斯克",url:"www.mi.com"})

  //传递响应式数据
  const user = ref(0)
  provide("provideUser",user)

  //添加用户
  const userAdd = () => {
    user.value++
  }
  //用于父组件将 函数 提供给所有子组件
  provide("provideFuncUserAdd",userAdd)
</script>

<template>
  <h3>App.vue-Top组件</h3>

  {{ user }}

  <!-- 子组件 -->
  <Header/>
</template>

<style scoped></style>
```



header.vue

```javascript
<script setup>
    import { provide, inject } from 'vue'

    //导入子组件
    import Nav from "./nav.vue"

    //子组件通过inject注入父组件提供的 响应式数据
    const user = inject("provideUser")
    console.log("provideUser:",user.value)

    //provide用于父组件将 数据 提供给所有子组件
    provide("provideUrl","mi.com")
</script>

<template>
    <h3>header.vue-Middle组件</h3>

    <!-- 子组件 -->
    <Nav/>
</template>

<style scoped>

</style>
```

nav.vue

```javascript
<script setup>
    //子组件
    import { inject } from 'vue'

    //子组件通过inject注入父组件提供的 数据
    const web = inject("provideWeb")
    console.log("provideWeb:",web)

    const url = inject("provideUrl")
    console.log("provideUrl:",url)

    //子组件通过inject注入父组件提供的 函数
    const funcUserAdd = inject("provideFuncUserAdd")
    console.log("provideFuncUserAdd:",funcUserAdd)
</script>

<template>
    <h3>nav.vue-Bottom组件</h3>

    <button @click="funcUserAdd">添加用户</button>
</template>

<style scoped>

</style>
```

## 插槽(slot)

### 匿名插槽和具名插槽

​    是指可以在父组件内自定义模板片段,

​    在子组件中可以将定义的模板片段插入到子组件的特定位置

App.vue

```javascript
<script setup>
  //导入子组件
  import Header from "./components/header.vue"
  import Footer from "./components/footer.vue"
</script>

<template>
  <h3>App.vue</h3>

  <!-- <Header/> -->
  <!-- 匿名插槽 -->
  <Header>
    <a href="http://mi.com">马斯克</a>
  </Header>

  <!-- 具名插槽 -->
  <Footer>
    <template v-slot:url>
      <a href="http://www.mi.com">网址</a>
    </template>

    <!-- v-slot:user 简写 #user -->
    <template #user>
      1000
    </template>
  </Footer>

</template>

<style scoped>

</style>
```



header.vue

```javascript
<script setup>
    
</script>

<template>
    <h3>header.vue - 子组件</h3>

    <!-- 匿名插槽 -->
    <slot/>
</template>

<style scoped>

</style>
```



footer.vue

```javascript
<script setup>
    
</script>

<template>
    <h3>footer.vue - 子组件</h3>

    <!-- 具名插槽 -->
    <slot name="url" />
    <slot name="user" />
</template>

<style scoped>

</style>
```

### 作用域插槽

作用域插槽

​    子组件向父组件传递数据,并在父组件定义的模板中渲染

App.vue

```javascript
<script setup>
  //导入子组件
  import Header from "./components/header.vue"
  import Footer from "./components/footer.vue"
</script>

<template>
  <h3>App.vue</h3>

  <!-- <Header/> -->
  <!-- 匿名插槽 -->
  <Header>
    <a href="http://mi.com">马斯克</a>
  </Header>

  <!-- 具名插槽 -->
  <Footer>
    <template v-slot:url>
      <a href="http://www.mi.com">网址</a>
    </template>

    <!--
      v-slot:user 简写 #user

      作用域插槽
      子组件将url和title数据传递给 name="user" 的插槽,
      父组件通过 #user="data" 来接收这些数据

      <template #user="data">
        1000 {{ data.url }} {{ data.title }}
      </template>
    -->
    <!-- 解构 -->
    <template #user="{url,title}">
      1000 {{ url }} {{ title }}
    </template>
  </Footer>

</template>

<style scoped>

</style>
```



header.vue

```javascript
<script setup>
    
</script>

<template>
    <h3>header.vue - 子组件</h3>

    <!-- 匿名插槽 -->
    <slot/>
</template>

<style scoped>

</style>
```



footer.vue

```javascript
<script setup>
    
</script>

<template>
    <h3>footer.vue - 子组件</h3>

    <!-- 具名插槽 -->
    <slot name="url" />
    <slot name="user" url="mi.com" title="马斯克" />
</template>

<style scoped>

</style>
```

## 生命周期函数

生命周期函数

​    是组件实例从创建到销毁过程中不同时间点自动调用的函数

挂载阶段

​    onBeforeMount

​        在组件实例即将被挂载到DOM树之前调用

​        此时模板还未编译或渲染到DOM,通常用于执行初始化操作,

​        如:获取异步数据、设置初始属性值等

​    onMounted

​        在组件成功挂载到DOM并完成首次渲染后调用

​        此时可以访问和操作DOM元素,

​        并执行与页面交互相关的逻辑

更新阶段

​    onBeforeUpdate (由于响应式数据变化)

​        在组件更新之前即将重新渲染时调用

​        可以根据新的参数判断是否需要进行特殊处理,

​        甚至可以选择阻止此次更新过程

​    onUpdated

​        在组件完成更新并重新渲染后调用

​        可以基于新的渲染结果处理更新后的数据

卸载阶段

​    onBeforeUnmount

​        在组件从DOM中销毁之前调用

​        用于释放资源,如:清理计时器、解绑事件监听器等

​    onUnmounted

​        在组件已经从DOM中移除并销毁后调用

​        确保组件所占用的所有资源都被正确释放

错误处理

​    onErrorCaptured

​        在捕获到组件中的错误时调用

​        用于处理错误,如:记录错误日志等

注

组件挂载的过程

模板编译

​    将组件的模板转换为JS代码

渲染

​    在模板编译后生成的JS代码渲染到页面上,

​    生成虚拟DOM

挂载

​    在渲染完成后将虚拟DOM挂载到真实的DOM树上,

​    使其在页面上显示出来

```javascript
<script setup>
  import { onMounted, onUpdated, ref } from 'vue'

  //在组件成功挂载到DOM并完成首次渲染后调用
  onMounted(() => {
    console.log("onMounted")
  })

  //在组件更新之后调用
  onUpdated(() => {
    console.log("onUpdated:",user.value)
  })

  const user = ref(0)
  console.log("user:",user.value)
</script>

<template>
  <h3>App.vue</h3>

  {{ user }}

  <button @click="user++">添加用户</button>
</template>

<style scoped>

</style>
```

## toRef和toRefs

```javascript
<script setup>
  import { reactive, toRef, toRefs } from 'vue'

  /*
  let {name,url} = reactive({
    name:"马斯克",
    url:"mi.com"
  })
  */
  let web = reactive({
    name:"马斯克",
    url:"mi.com"
  })

  //toRefs将一个响应式对象的所有属性转换为ref对象
  //let {name,url} = toRefs(web)

  //toRef将一个响应式对象的某个属性转换为ref变量
  let url = toRef(web, "url")

  const setUrl = () => {
    console.log(url)
    url.value = "www.mi.com"
  }
</script>

<template>
  {{ url }}

  <button @click="setUrl">设置网址</button>
</template>

<style scoped>

</style>
```

##    Pinia是一个轻量级的状态管理库

​    Pinia官网

​    https://pinia.vuejs.org/zh

​    状态管理库是用于管理应用程序全局状态的工具

​    以登录为例:

​        使用Pinia创建一个userStore来集中管理用户的登录状态和过期时间

​        当用户登录成功时:

​            设置userStore中用户的登录状态为已登录,并设置过期时间

​        当用户退出登录时:

​            修改userStore中用户的登录状态为未登录,并删除过期时间

​    Pinia 和 组件通信 的区别

​    虽然Vue提供的父传子、子传父以及跨组件通信也可以用于状态共享,

​    但在大型项目中,随着组件数量的增加,会导致以下问题:

​    1.组件之间传递大量的props,会使项目变得非常繁琐和难以维护

​    2.非父子组件间过度依赖provide/inject,使状态散落在各个组件之间

​    Pinia 可以解决以下问题:

​    1.全局状态管理

​        所有组件都可以访问和修改状态,而不用在每个组件内部进行状态管理

​    2.简化组件之间的通信

​        避免在组件之间传递大量的props

​    3.状态持久化

​        可以将应用程序的状态保存到本地存储中,

​        在应用程序重启后会保留状态,对于登录等场景非常有用

​    总的来说,Pinia可以处理大型项目中复杂的状态管理需求,

​    而父传子、子传父以及跨组件通信,可以解决一些简单的状态传递问题,

​    更适合小型项目

​    Pinia 和 localStorage 的区别

​    localStorage

​        LocalStorage只能存储字符串类型的数据

​        LocalStorage有大小限制,通常为5MB左右

​    Pinia

​        Pinia可以存储任何类型的数据,包括对象、数组等

​        Pinia没有大小限制,可以存储大量的数据

​    总的来说,对于复杂的状态管理需求,使用Pinia是更好的选择,

​    而对于简单的状态管理需求,使用localStorage是更简单的解决方案

2.安装 Pinia 以及定义和使用 Store

安装Pinia

​    npm install pinia

main.js

```javascript
import { createApp } from 'vue'

//导入Pinia的createPinia方法,用于创建Pinia实例(状态管理库)
import { createPinia } from 'pinia'

import App from './App.vue'

//创建一个Pinia实例,用于在应用中集中管理状态(store)
const pinia = createPinia()

//createApp(App).mount('#app')
const app = createApp(App)
app.use(pinia) //将Pinia实例注册到Vue应用中
app.mount('#app')
```



web.js

```javascript
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

/*
  定义一个基于 Pinia 的 Store
  第1个参数 web 是 useWebStore 在应用中的唯一标识符(ID)
  第2个参数是 Setup函数 或 Option对象
*/
export const useWebStore = defineStore('web', () => {
  //定义一个响应式对象，存储网站信息
  const web = reactive({
    title: "马斯克",
    url: "mi.com"
  })

  //定义一个响应式引用，存储用户数
  const users = ref(1000)
  
  //定义方法
  const userAdd = () => {
    users.value++
  }

  return {
    web,
    users,
    userAdd
  }
})
```



App.vue

```javascript
<script setup>
    import { useWebStore } from './stores/web.js'

    const webStore = useWebStore()
    
    console.log("webStore.web:",webStore.web)
    console.log("webStore.users:",webStore.users)
</script>

<template>
    {{ webStore.web.url }}

    {{ webStore.users }}

    <button @click="webStore.userAdd" >添加用户</button>
</template>

<style scoped>

</style>
```

### 3.Pinia 持久化存储插件

官网

https://prazdevs.github.io/pinia-plugin-persistedstate/zh



安装

npm i pinia-plugin-persistedstate



注

pinia持久化插件也是存储到localStorage中,

为什么不直接使用localStorage?



自动状态同步

​    持久化插件自动将Pinia的状态存储到localStorage中,

​    无需手动处理状态的读取和写入

易用性

​    无需手动处理localStorage的键值对存储、数据转换等繁琐过程

与Vue组件状态紧密集成

​    持久化插件与Vue组件的响应式数据完美结合

​    当状态改变时,依赖这些状态的组件会自动更新视图

​    与仅仅从localStorage中读取静态数据相比更加灵活和强大



main.js

```javascript
import { createApp } from 'vue'

//导入Pinia的createPinia方法,用于创建Pinia实例(状态管理库)
import { createPinia } from 'pinia'

//从 pinia-plugin-persistedstate 模块中导入 piniaPluginPersistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

//创建一个Pinia实例,用于在应用中集中管理状态(store)
const pinia = createPinia()

//将插件添加到 pinia 实例上
pinia.use(piniaPluginPersistedstate)

//createApp(App).mount('#app')
const app = createApp(App)
app.use(pinia) //将Pinia实例注册到Vue应用中
app.mount('#app')
```



web.js

```javascript
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

/*
  定义一个基于 Pinia 的 Store
  第1个参数 web 是 useWebStore 在应用中的唯一标识符(ID)
  第2个参数是 Setup函数 或 Option对象
*/
export const useWebStore = defineStore('web', () => {
  //定义一个响应式对象，存储网站信息
  const web = reactive({
    title: "马斯克",
    url: "mi.com"
  })

  //定义一个响应式引用，存储用户数
  const users = ref(1000)
  
  //定义方法
  const userAdd = () => {
    users.value++
  }

  return {
    web,
    users,
    userAdd
  }
},
{
  //持久化存储到 localStorage 中
  persist: true
})
```

## Vue Router 

​    https://router.vuejs.org/zh



### 1.安装

​    npm install vue-router@4

代码

```javascript
demo\src\router\index.js
	import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

	const routes = [
	    {
	        path: "/", // http://localhost:5173
	        component: () => import("../views/index.vue")
	    },
	    {
	        path: "/content", // http://localhost:5173/content
	        component: () => import("../views/content.vue")
	    },
	]

	const router = createRouter({
	    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	    //history: createWebHashHistory(), 
	    history: createWebHistory(),
	    routes
	})

	export default router


demo\src\main.js
	import { createApp } from 'vue'
	import App from './App.vue'

	import router from './router'

	//use(router) 将Vue Router实例注册到Vue应用中
	createApp(App).use(router).mount('#app')


demo\src\views\index.vue
	<script setup>
	    
	</script>

	<template>
	    首页 - mi.com
	</template>

	<style scoped>

	</style>

demo\src\views\content.vue
	<script setup>

	</script>

	<template>
	    内容页 - 马斯克
	</template>

	<style scoped>

	</style>

demo\src\App.vue
	<script setup>

	</script>

	<template>
	  <router-view />
	</template>

	<style scoped>

	</style>
```

### 2.配置路径别名@和VSCode路径提示

```javascript
demo\vite.config.js  配置路径别名@
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import path from 'path' //导入 node.js path

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: { //配置路径别名
        '@': path.resolve(__dirname, 'src')
      }
    }
  })


demo\jsconfig.json  VSCode路径提示 [js]
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"] // 配置 @ 符号指向 src 目录及其子目录
      }
    }
  }


demo\src\router\index.js
  import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

  const routes = [
      {
          path: "/", // http://localhost:5173
          // component: () => import("../view/index.vue")
          component: () => import("@/view/index.vue")
      },
      {
          path: "/content", // http://localhost:5173/content
          component: () => import("@/view/content.vue")
      },
  ]

  const router = createRouter({
      // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
      // history: createWebHashHistory(), 
      history: createWebHistory(),
      routes
  })

  export default router
```

### 3.使用查询字符串或路径传递参数

```javascript
demo\src\router\index.js
	import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

	const routes = [
	    {
	        path: "/",
	        // component: () => import("../views/index.vue")
	        component: () => import("@/views/index.vue")
	    },
	    {
	        path: "/content", // 使用查询字符串传递参数 http://localhost:5173/content?id=100&title=马斯克
	        component: () => import("@/views/content.vue")
	    },
	    {
	        path: "/user/:id/name/:name", // 使用路径传递参数 http://localhost:5173/user/007/name/马斯克
	        component: () => import("@/views/user.vue")
	    },
	    {
	        //可选参数 name? 表示该参数不是必需的
	        path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
	        component: () => import("@/views/user.vue")
	    },
	]

	const router = createRouter({
	    // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	    // history: createWebHashHistory(), 
	    history: createWebHistory(),
	    routes
	})

	export default router


demo\src\views\content.vue
	<script setup>

	</script>

	<template>
	    内容页 - 马斯克 <hr>

	    id: {{ $route.query.id }} <br>
	    title: {{ $route.query.title }}
	</template>

	<style scoped>

	</style>


demo\src\views\user.vue
	<script setup>

	</script>

	<template>
	    个人主页 - www.mi.com <hr>

	    id: {{ $route.params.id }} <br>
	    name: {{ $route.params.name }}
	</template>

	<style scoped>

	</style>
```

### 4.router-link、定义别名、定义路由名称、编程式导航

```javascript
demo\src\router\index.js
	import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

	const routes = [
	    {
	        path: "/",
	        //alias:"/home", //定义别名 http://localhost:5173/home
	        alias:["/home","/index"], // http://localhost:5173/home http://localhost:5173/index
	        // component: () => import("../views/index.vue")
	        component: () => import("@/views/index.vue")
	    },
	    {
	        path: "/content", // 使用查询字符串传递参数 http://localhost:5173/content?id=100&title=马斯克
	        component: () => import("@/views/content.vue")
	    },
	    {
	        path: "/user/:id/name/:name", // 使用路径传递参数 http://localhost:5173/user/007/name/马斯克
	        component: () => import("@/views/user.vue")
	    },
	    {
	        //可选参数 name? 表示该参数不是必需的
	        path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
	        name: "history", // 定义路由名称
	        component: () => import("@/views/user.vue")
	    },
	]

	const router = createRouter({
	    // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	    // history: createWebHashHistory(), 
	    history: createWebHistory(),
	    routes
	})

	export default router


demo\src\views\index.vue
	<script setup>
	    import { useRouter } from 'vue-router';
	    const router = useRouter()

	    let userId = 100
	    let userName = "马斯克"

	    const goTo = ()=> {
	        //router.push("/user/007/name/马斯克")
	        //router.push({ path: '/content', query: { id: 200, title: '马斯克' } })
	        router.push({ name: 'history', params: { id: '300', name: '马斯克' }})
	    }
	</script>

	<template>
	    首页 - mi.com <hr>

	    <router-link to="/content?id=100&title=马斯克">查询字符串传参</router-link> <br>
	    <router-link to="/user/007/name/马斯克">路径传参</router-link> <br>

	    <!-- 动态属性绑定 -->
	    <router-link :to="{ path: '/content', query: { id: 200, title: '马斯克' } }">查询字符串传参 - 动态属性绑定</router-link> <br>
	    <router-link :to="{ path: `/user/${userId}/name/${userName}` }">路径传参 - 动态属性绑定</router-link> <br>

	    <!-- 定义路由名称 -->
	    <router-link :to="{ name: 'history', params: { id: '300', name: '马斯克' }}">路径传参 - 定义路由名称</router-link> <br>

	    <!-- 编程式导航 -->
	    <button @click="goTo()">编程式导航</button>
	</template>

	<style scoped>

	</style>
```

### 5.嵌套路由结合共享组件

```javascript
demo\src\router\index.js
	import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

	const routes = [
	    {
	        path: "/",
	        //alias:"/home", //定义别名 http://localhost:5173/home
	        alias: ["/home", "/index"], // http://localhost:5173/home http://localhost:5173/index
	        // component: () => import("../views/index.vue")
	        component: () => import("@/views/index.vue")
	    },
	    {
	        path: "/content", // 使用查询字符串传递参数 http://localhost:5173/content?id=100&title=马斯克
	        component: () => import("@/views/content.vue")
	    },
	    {
	        path: "/user/:id/name/:name", // 使用路径传递参数 http://localhost:5173/user/007/name/马斯克
	        component: () => import("@/views/user.vue")
	    },
	    {
	        //可选参数 name? 表示该参数不是必需的
	        path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
	        name: "history", // 定义路由名称
	        component: () => import("@/views/user.vue")
	    },
	    {
	        path: "/vip", 
	        component: () => import("@/views/vip.vue"),
	        children: [ // 子路由
	            {
	                path: '', // 默认页 http://localhost:5173/vip
	                component: import("@/views/vip/default.vue")
	            },
	            {
	                path: 'order', // 会员订单 http://localhost:5173/vip/order
	                component: import("@/views/vip/order.vue")
	            },
	            {
	                path: 'info', // 会员资料 http://localhost:5173/vip/info
	                component: import("@/views/vip/info.vue")
	            }
	        ]
	    },
	]

	const router = createRouter({
	    // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	    // history: createWebHashHistory(), 
	    history: createWebHistory(),
	    routes
	})

	export default router


demo\src\views\vip.vue
	<script setup>
	  //导入子组件
	  import Header from "@/components/header.vue"
	  import Footer from "@/components/footer.vue"
	</script>

	<template>
	    <!-- 共享的Header组件 -->
	    <Header/>

	    <!-- 根据不同的子路由加载不同子页面 -->
	    <router-view />

	    <!-- 共享的Footer组件 -->
	    <Footer/>
	</template>

	<style scoped>

	</style>

demo\src\views\vip\default.vue
	<script setup>

	</script>

	<template>
	    会员默认页
	</template>

	<style scoped>

	</style>

demo\src\views\vip\order.vue
	<script setup>

	</script>

	<template>
	    会员订单
	</template>

	<style scoped>

	</style>

demo\src\views\vip\info.vue
	<script setup>

	</script>

	<template>
	    会员资料
	</template>

	<style scoped>

	</style>

demo\src\components\header.vue
	<script setup>

	</script>

	<template>
	    <h3>header</h3>
	</template>

	<style scoped>

	</style>

demo\src\components\footer.vue
	<script setup>

	</script>

	<template>
	    <h3>footer</h3>
	</template>

	<style scoped>

	</style>
```

### 6.重定向

```javascript
demo\src\router\index.js
    import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

    const routes = [
        {
            //可选参数 name? 表示该参数不是必需的
            path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
            name: "history", // 定义路由名称
            component: () => import("@/views/user.vue")
        },
        {
            path: "/vip", 
            component: () => import("@/views/vip.vue"),
            children: [ // 子路由
                {
                    path: '', // 默认页 http://localhost:5173/vip
                    component: import("@/views/vip/default.vue")
                },
                {
                    path: 'order', // 会员订单 http://localhost:5173/vip/order
                    component: import("@/views/vip/order.vue")
                },
                {
                    path: 'info', // 会员资料 http://localhost:5173/vip/info
                    component: import("@/views/vip/info.vue")
                }
            ]
        },
        {
            path: "/svip", // http://localhost:5173/svip
            //redirect: "/vip" // 重定向
            redirect: { name: 'history', params: { id: '100', name: 'David' } }
        },
    ]

    const router = createRouter({
        // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
        // history: createWebHashHistory(), 
        history: createWebHistory(),
        routes
    })

    export default router
```

### 7.全局前置守卫

```javascript
demo\src\main.js
	import { createApp } from 'vue'
	import App from './App.vue'

	import router from './router'

	//createApp(App).mount('#app')
	const app = createApp(App)
	app.use(router)

	//全局前置守卫
	router.beforeEach((to, from, next) => {
	    console.log("to:",to) //即将进入的路由的信息
	    console.log("from:",from) //当前即将离开的路由信息

	    next()

	    /*
	        if(to.name == "history"){
	            next(false) //拦截
	        }else{
	            next() //继续
	        }
	    */
	})

	app.mount('#app')
```



vue3的基础知识学完了

学习vue应用

https://element-plus.org/zh-CN/component/layout.html

## element  plus

```
npm install element-plus --save
```

```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```



<el-icon><Plus /></el-icon>   <el-icon><House /></el-icon>

左侧的菜单控制   表格内容



