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

```javascript

require ('./who');
require ('./who'); 即使你又一次写入了该模块，该模块不会重复加载

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







