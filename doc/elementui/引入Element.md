引入 Element

你可以引入整个 Element，或是根据需要仅引入部分组件。
我们先介绍如何引入完整的 Element。

1.完整引入

在 main.js 中写入以下内容：

import Vue from 'vue'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

2.按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

npm install babel-plugin-component -D

然后，将 .babelrc 修改为：

{   
  "presets": [   
     ["es2015", { "modules": false }]   
   ],   
   "plugins": [["component", [    
     {    
       "libraryName": "element-ui",   
       "styleLibraryName": "theme-default"    
     }    
   ]]]    
 }    

