# blog项目
* mongodb
* mongoose
* express

## 1 使用express-generator项目生产器 生成一个项目



## 2 配置数据库

### 2.1 起来一个服务器

命令行输入  等号后面那是本地数据库文件存放地址 这个必须提前建好文件 不然报错

```
mongod --dbpath=D:\Mongodb\data;
```

### 2.2 创建配置文件 settings

由于这个dbUrl  需要在多个地方使用所以把它单独拿出来
```
Module.exports = {
  dbUrl:"mongodb://localhost/mxx"
}
```

### 2.3  mongoose 创建模型

> 建立db 文件夹  index.js

```
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:端口号/数据库名称");
//mongoose.connect("mongodb://localhost/mxx");
// 但是由于把这部分写到settings 中了，所以应该这么写
mongoose.connect(settings.dbUrl);

```
> 创建模型骨架 Schema

```
var UserSchema  = new Schema({

})
```

>  Model 拥有了Model，我们也就拥有了操作数据库的能力

```
var UserModel = mongoose.model('mxxUser', UserSchema);
```

### 2.4 the important note

在全局对象上定义一个方法属性，当传入一个模型名称，返回此名称对应的模型

```
global.Model = function(modelName){
   return mongoose.model(modelName);
}
```

由于之后需要向数据库中进行集合的增删改查，需要多次操作model，所以向全局变量暴露
一个方法，用于获取该Model

例如你要增加一个用户

本来是
```
UserModel.create(....)
```
当有全局方法之后

```
Model('UserModel').create()
```

> 在app.js 中引入此文件

```
require('./db')
```


## 3文件分析

### 3.1  app.js  这是最重要的文件 是各种配置项所在

下面将几行重要的代码分析一下

>处理收藏夹图标 favicon

```
var favicon = require('serve-favicon');

```

> cookieParser  读取cookie值

```
var cookieParser = require('cookie-parser');
app.use(cookieParser());

```
cookieParser  挂载了 req.cookies   可以读取cookie值

> bodyParser  处理请求体

通过判断请求头中的content-type来得到请求体的内容类型
```
var bodyParser = require('body-parser')

//如果是content-type=application/json req.body=JSON.parse(请求体)
app.use(bodyParser.json());//处理json格式请求体 {name:'zfpx'}

//用来处理urlencoded请求体 name=zfpx&age-6
//如果content-type=application/x-www-form-urlencoded
 req.body=querystring.parse(请求体)
app.use(bodyParser.urlencoded({ extended: false }));
```

bodyParser 处理请求体  可以是查询字符串形式 也可以是form表单形式

* 查询字符串形式是通过 req.query
* form表单是json格式是通过req.body

>  express-session 和 connect-mongo  会话支持模块


```
// 引入 session
var session = require('express-session');
//把session放在数据库mongodb中  本来在服务器的内存里
var MongoStore = require('connect-mongo')(session);

//当使用了session中间件之后  req.session,在不同的请求之间可以共享
app.use(session({
  secret:'mxx',//指定要加密cookie的密钥
  resave:true,//每次请求都要重新保存session
  saveUninitialized:true,//保存未初始化的session
  store:new MongoStore({ //指定session存储位置
    url:settings.dbUrl //指定了session的存储位置
  })
}));

```



### 3.2 bin/www 文件


简要概括 一行代码
```
 require('http').createServer(app).listen(port)
```
就是引入上文那个app实例 开启一个http 服务


有一个环境变量的问题 process.env.PORT
获取环境变量中的某一个值 process.env



### 3.3 routes 路由文件

```
var express =require('express');
var router = express.Router();  //生成一个路由实例

app.get('/',function(req,res){
  res.send('homepage')
})

module.exports = router;
//导出这个路由并在app.js中通过app.use('/', routes); 加载
```
### 3.4 views 视图文件

模板文件中的 ``` <%= title %> ```  这样的模板字符串 会在页面渲染时，被传入的值
替换 并渲染为HTML形式输出


### 3.5 public 静态文件


在app.js中设置静态文件存放目录
```
app.use(express.static(path.join(__dirname,'public')))

```
将图像 css js 等静态文件放在这里

然后引入文件的时候要注意，

比如在 header.html中引入Bootstrap 样式文件
```
<link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.css">

```

### 3.6 package.json  依赖信息等

提过多次，不在赘述

### 3.7 拆分文件 include

创建include文件夹 然后里面header.html footer.html
前者是头部公共部分 后者是尾部公共部分

然后普通的页面需要引入这个公共部分

例如登录页面
```
<%include ../include/header.html  %>
 登录页自己的代码
<%include ../include/footer.html  %>

```

## 3.8 中间件auth  权限设置

有一些路由当只有登录后才可以访问，这样可以设置中间件

```
exports.mustLogin = function (req,res,next){
  if(req.session.user){
     next();
  }else{
    req.flash('error','请先登录');
    res.redirect('/user/reg');
  }
}
```




## 4 flash 消息提醒


> [connect-flash](https://github.com/jaredhanson/connect-flash)

是一个在 session 中用于存储信息的特定区域 .信息写入 flash ，
**当读取显示完毕后即被清除**

写flash   req.flash('Name',value)
读flash   req.flash('Name')

app.js

```
var flash = require('connect-flash');
app.use(flash());
```
写入flash

```
req.flash('success','您的操作成功')
req.flash('error','您的操作失败')

```
由于每一页都有信息提示，所以把这个放在ree.locals中

app.js 中间件
```
app.use(function(req,res,next){

  res.locals.success = req.flash('success').toString();
  res.locals.error = req.flash('error').toString();

  next();
})

```





## 5 bower 安装bootstrap jquery插件


```
bower install  xxxx
```
注意创建一个.bowercc 文件 里面写上通过bower安装的插件应该存放的目录
不然会自动安装到 bower_modules

```
{'directory':'./public/lib'}
```

* * *

## 6 Promise 链式调用

这个是经常使用的

> then catch












