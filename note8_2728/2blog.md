#blog 功能实现

## 1 头部 header

公共部分header 要引入样式文件 放入页面导航




## 2 注册

### 2.1 视图

通过form表单提交用户信息

```
<form action='/user/login' method ='post'  >
    <input  name ='username '/>
</form>
```
表单中action method 以及input的name 属性是不可少的

> input的name 属性

是表单序列化的必要条件


### 2.2 路由

> MD5密码加密

用户的注册密码是需要通过MD5加密才可以存储到数据库中

创建 utils.js
md5 对 传入的参数加密  输出16进制字符串

```
exports.md5 = function(str){
      return require('crypto').createHash('md5').update(str).digest('hex');
                           /*   创建MD5 算法  更新  输出  */
}

```

### 2.3 设置一个私人头像

[在网站通过邮箱设置一个任何网站都可以访问的头像](https://en.gravatar.com/emails/)




> 向数据库添加该用户

```
var user = req.user;

Model('User').create(user).then(function(doc){
   req.session.user = doc; // 将集合写到cookie中
},function(){})

```
在app.js中添加用户模板字符串的渲染规则

```
res.locals.user = req.session.user;
```




## 3 登录