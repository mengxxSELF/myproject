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


## 3文件分析

### 3.1  app.js  这是最重要的文件 是各种配置项所在

下面将几行重要的代码分析一下

>处理收藏夹图标 favicon

```
var favicon = require('serve-favicon');

```

> 中间件

```
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

```
后面要app.use
```
app.use(bodyParser.json()); 加载解析json的中间件。
//加载解析urlencoded请求体的中间件。
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); 加载解析cookie的中间件。
```

cookieParser  挂载了 req.cookies   可以读取cookie值

bodyParser 处理请求体  可以是查询字符串形式 也可以是form表单形式
但是前者是通过 req.query  后者是req.body

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

## 4 bower 安装bootstrap jquery插件


```
bower install  xxxx
```
注意创建一个.bowercc 文件 里面写上通过bower安装的插件应该存放的目录
不然会自动安装到 bower_modules

```
{'directory':'./public/lib'}
```

















