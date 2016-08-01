#module

> module的路径
` console.log(module.paths)  `





## node中有三类模块
* 核心模块
* 文件夹模块
* 第三方模块


> 对于文件夹模块，就是用户自己创建的module

`var gotM = require(./got)`

##定义在全部变量上的属性，可以在任意模块中使用

```javascript
   这是try.js 中的内容
   global.name = 'name is li';

   这是use.js 中内容
   require('./try');
   console.log(global.name);  输出name is li

```
** 加载同一个模块不需要重复引入   **
模块在首次被加载的时候回被缓存起来

```javascript

require ('./who');
require ('./who'); 即使你又一次写入了该模块，该模块不会重复加载，模块的初始化执行一次

```


> 如果你想试试重新加载模块，可以第一次的缓存清掉

```javascript

require.cache()  是读取缓存的

读出的结果是    {模块a地址:缓存的模块 , 模块b地址:缓存的模块 , ...... }

require.resolve(filename) 读取缓存文件在内存的地址

```
##  尝试删除一个模块缓存之后重新引入该模块

```javascript
require('./try');
delete require.cache[require.resolve('./try')];
require('./try')


```

##模块暴露接口
` module.exports = modulename  `

## require
异步的有回调函数 同步的通过var 返回值获取

require是个同步方法

默认拿到的是{}



##引入模块的查找原则
` reruire('fs') `

按照 module.paths 的顺序，从内到外查找node_modules文件夹中的模块文件

找到该模块包,然后查找该模块包中的index.js(有的是index.json)
如果没有查找package.json 里面有个main 参数，他的值是入口文件

##介绍一个node的核心模块util

```javascript
var util =require('util');
util.inherits(); // 继承父级
util.inspect(); // 可以显示隐藏属性  console.dir()

```

***
关于模块依赖

CMD seajs(依赖就近)  [CMD规范](https://github.com/cmdjs/specification/blob/master/draft/module.md)

AMD requirejs(依赖前置) [AMD规范](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)

COMMONJS 使用的是AMD的依赖前置规范

两个类库在模块和factory的书写上其实无太大差异，差异在于模块的加载factory函数的执行。

 CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

// CMD
```javascript
define(function(require, exports, module) {
   var a = require('./a')
   a.doSomething()
   // 此处略去 100 行
   var b = require('./b') // 依赖可以就近书写
   b.doSomething()
   // ...
})
```


// AMD 默认推荐的是
```javascript
define(['./a', './b'], function(a, b) {
    // 依赖必须一开始就写好
    a.doSomething()
    // 此处略去 100 行
    b.doSomething()
    // ...
})
```









