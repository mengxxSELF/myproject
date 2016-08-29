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
### 2  app.js  这是最小重要的文件 是各种配置项所在




### 3 routes 路由文件
### 4 public 静态文件
### 5 package.json  依赖信息等
### 6 views 视图文件




