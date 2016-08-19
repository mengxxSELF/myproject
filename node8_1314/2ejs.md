##  express 支持多种模板  ejs
可以引入模板

```javascript

var ejs =require('ejs')

app.set('view engine','ejs'); // 写入模板引擎
app.set('views',{path.resolve('build')}); // 模板存放目录

```

## html 的模板
```javascript

var ejs =require('ejs')

app.set('view engine','html'); // 写入模板引擎
app.set('views',{path.resolve('build')}); // 模板存放目录

app.engine('.html', require('ejs').__express); //__express是ejs模块的一个公共属性，表示要渲染的文件扩展名
```








