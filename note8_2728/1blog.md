# blog项目
* mongodb
* mongoose
* express

## 1 使用express-generator项目生产器 生成一个项目



## 2 配置数据库

### 1 起来一个服务器

命令行输入  等号后面那是本地数据库文件存放地址 这个必须提前建好文件 不然报错

```
mongod --dbpath=D:\Mongodb\data;
```

## 3文件分析
### 1 bin/www 文件

简要概括 一行代码
```
 require('http').createServer(app).listen(port)
```
### 2  app.js  这是最重要的文件 是各种配置项所在

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




### 3 routes 路由文件
### 4 public 静态文件
### 5 package.json  依赖信息等
### 6 views 视图文件




