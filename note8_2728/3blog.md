#blog 功能实现

## 1 所需功能

> 首先定义文章模型骨架

* 添加
* 列表展示
    * * 查看所有发布的文章
    * * 查看某一个作者的文章
* 详情
* 编辑 删除
* 排序
* 评论
* 浏览量


## 2 添加文章

### 2.1 视图

通过form表单提交文章信息

```
<form action='/article/add' method ='post'  >

</form>
```
表单中action method 以及input的name 属性是不可少的

> input的name 属性

是表单序列化的必要条件


### 2.2 路由

注意从form表单中提交过来的字段里面只有 title content
是没有作者的，所以需要user字段


```
    var article = req.body;
    article.user = req.session.user._id;
    Model('Article').create(article).then()
```

## 3 文章列表

### 3.1  路由

查找文章中所有集合

```
Model('Article')
    .find({})
    .sort({createAt:-1})
    .populate('user')  // 这个是把user转为对象 不然是字符串形式
    .exec()
    .then(function(docs){
         res.render('article/list',{ articles: docs })
    })
```

### 3.2 视图

```
<%
   articles.forEach(function(article){ %>
       <%= article.title %>
       <%= article.content %>

       <%= article.createAt.tolocaleString() %>

// 一下这两个是从外键user中获取的
       <%= article.user.avatar %>
       <%= article.user.username %>
   <% })
%>

```

## 4 文章详情

### 4.1 视图
### 4.2 路由

> 主要是通过文章_id 来查找数据库

```
router.get('/detail/:id', function (req,res) {
    var articleId = req.params.id;
    Model('Article').findById({_id:articleId}).then(function (doc) {
        res.render('article/detail',{title:'文章详情' ,article:doc})
    })
})

```
## 5




