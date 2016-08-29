#blog 功能实现

## 1 注册

### 1.1 视图

通过form表单提交用户信息

```
<form action='/user/login' method ='post'  >
    <input  name ='username '/>
</form>
```
表单中action method 以及input的name 属性是不可少的

> input的name 属性

是表单序列化的必要条件


### 1.2 路由

> 密码加密

用户的注册密码是需要通过MD5加密才可以存储到数据库中

创建 utils.js
md5 对 传入的参数加密  输出16进制字符串

```
exports.md5 = function(str){
      return require('crypto').createHash('md5').update(str).digest('hex');
                           /*   创建MD5 算法  更新  输出  */
}

```

### 1.3 设置一个私人头像

在网站通过邮箱设置一个任何网站都可以访问的头像
https://en.gravatar.com/emails/









## 2 登录