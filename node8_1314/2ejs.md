##  express 支持多种模板  ejs
可以引入模板

```javascript

var ejs =require('ejs')

app.set('view engine','ejs'); // 写入模板引擎
app.set('views',path.resolve(__dirname,'build')); // 模板存放目录

```

## html 的模板


```javascript

var ejs =require('ejs')

app.set('view engine','html'); // 写入模板引擎
app.set('views',path.resolve(__dirname,'build')); // 模板存放目录

app.engine('.html', require('ejs').__express); //__express是ejs模块的一个公共属性，表示要渲染的文件扩展名
```


## 页面渲染
这个render 的页面地址是相对于 上面设置的模板存放目录而言的


> 使用数据渲染



```javascript


app.use(function(req,res){
   res.locals.commonAttr = '我是公共属性值';
   next();
})
app.post('/lists',function(req,res){
   res.render('user',{user1:'luhan',age:'20'})
})



app.post('/lists',function(req,res){
   res.render('user',{user1:'luhan',age:'20'},function(err,data){
       data += '这是对页面数据进行的进一步操作';
       res.send(data);
   })
})

```


```javascript

// 判断用户名和密码
app.post('/form',function(req,res){
   if(req.query.username=='admin'&&req.query.pwd=='admin' ){
       res.render('user');
   }else{
       res.redirect(back); // 重定向到本页面
   }
})

```

##  var bodyParser = require('body-parser');
使用这个可以将请求体转成对象放在 req.body上

```javascript
app.use(function(req,res,next){
   //把请求体转成req.body
   //要根据请求体的类型调用不同的转换方法 key=value , {key:value}
});
```







