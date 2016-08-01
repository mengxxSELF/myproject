#global对象

*在js中，有一个Window对象是全局变量，可以在任意地方访问，在node中，则有一个GLobal对象是全局变量*


> global 的属性

* console
* process
* setTimeout
* setInterval
* setImmediate



> console

** 你可以打印console.log(global.console)查看所有属性 下文列出常用的几个  **

```javascript
console.log
console.error
cosnole.info
console.time
console.timeEnd

```



> process

** 你可以打印console.log(global.process)查看所有属性 下文列出常用的几个  **

```javascript

process.cwd   当前工作目录 current working directory
process.chdir  更改路径
process.memoryUsage 内存
输出是 { rss: 17293312, heapTotal: 7524096, heapUsed: 3976824 }
表示    常驻内存        堆内存              堆的使用量
process.nextTick(fn)  小本最底部的处理函数
```