# tocean-course-vue2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

可以看到有两种版本： Runtime Only 版本 和 Runtime+Compiler 版本。

1.Runtime Only

我们在使用 Runtime Only 版本的 Vue.js 的时候，通常需要借助如 webpack 的 vue-loader 工具把 .vue 文件编译成 JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量。 在将 .vue 文件编译成 JavaScript 的编译过程中会将组件中的 template 模板编译为 render 函数，所以我们得到的是 render 函数的版本。所以运行的时候是不带编译的，编译是在离线的时候做的。

2.Runtime+Compiler

我们如果没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，则需要在客户端编译模板，如下所示：

// 需要编译器的版本

new Vue({

template: '{{ hi }}'

})

// 这种情况不需要

new Vue({

render (h) {

    return h('div', this.hi)

}

})

因为在 Vue.js 2.0 中，最终渲染都是通过 render 函数，如果写 template 属性，则需要编译成 render 函数，那么这个编译过程会发生运行时，所以需要带有编译器的版本。

很显然，这个编译过程对性能会有一定损耗，所以通常我们更推荐使用 Runtime-Only 的 Vue.js。

只有以下情况会用到 compiler：

1.有指定 template;

2.没指定 template，也没指定 render（这时候使用的就是被挂载元素的 outerHtml）。

所以，没有使用到 compiler 的情况只有：没有指定 template，但指定了 render。

有时会遇到这样的错误：

[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

以上提到，解决这个问题有两种方式，但大多会选择后者，也就是使用全功能的 vue（runtime+compiler），这个版本的 vue 文件相比仅包含 runtime 的版本体积要大，而且运行时的 compiler 转换会消耗性能，compiler 过程其实可以放到构建过程中进行。

总结就是，如果可以的话，尽量使用 runtime 版的 vue 文件。

为什么 vue 默认导出的是 vue.common.js，它和 vue.js 的区别在哪里，又有什么关系？

这个问题在囧克斯的博客中有提到。

Vue 最早会打包生成三个文件，一个是 runtime only 的文件 vue.common.js，一个是 compiler only 的文件 compiler.js，一个是 runtime + compiler 的文件 vue.js。

也就是说，vue.js = vue.common.js + compiler.js，而如果要使用 template 这个属性的话就一定要用 compiler.js，那么，引入 vue.js 是最恰当的。

npm i gsap -D
//typical import
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

//or get to the parts that aren't included inside TweenMax:
import Draggable from "gsap/Draggable";
import ScrollToPlugin from "gsap/ScrollToPlugin";

//or, as of 2.0, all tools are exported from the "all" file (excluding bonus plugins):
import {TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all";
//if tree shaking dumps plugins, just reference them somewhere in your code like:
const plugins = [CSSPlugin, ScrollToPlugin];

npm i color-js -D

https://github.com/vuejs/jsx#installation

for Render6.vue

<script type="text/template" id="defaultTemplateText">
<div>
  <header>
    <h1>I'm a template!</h1>
  </header>
  <p v-if="message">{{ message }}</p>
  <p v-else>No message.</p>
</div>
</script>

https://github.com/vuejs/awesome-vue#components--libraries

https://cli.vuejs.org/zh/config/

https://babeljs.io/docs/en/learn

https://webpack.js.org/configuration/

https://webpack.academy/p/the-core-concepts

npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm -g install typescript 全局安装
npm install typescript -S
npm install vue-class-component -S
npm install ts-loader -S
npm install @vue/eslint-config-typescript -S
Parsing error: Using the export keyword between a decorator and a class is not allowed. Please use `
解决方法：eslint 配置文件中添加配置项：

"parserOptions": {
"ecmaFeatures": {
"legacyDecorators": true
}
},
