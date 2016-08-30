#blog 功能实现

## 1 所需功能

> 首先定义文章模型骨架

* 添加
* 列表展示
    * * 查看所有发布的文章
    * * 查看某一个作者的文章
    * * 分页查询
* 详情
* 编辑 删除
* 评论
* 浏览量
* 排序


## 7 评论

> 先去article 的模型骨架增加评论字段

```
comments:[
   content:String,
   createAt:{ type:Date, default:Date now()},
   user:{type:ObjectId,ref:'User'}
]

```

### 7.1 视图

通过form表单提交评论信息

```
<form action='/article/comment/<%=article._id%>' method ='post'  >

</form>
```

### 2.2 路由

注意从form表单中提交过来的字段里面只有content
是没有作者的，所以需要手动添加user字段


```
    var articleId =  req.params.id;
    var comment = req.body;
    Model('Article').update({_id:articleId},{
        $push:{comments:[
           content: comment ,
           user: req.session.user._id
        ]}
    })
```

## 3 文章列表

### 3.1  查看当前所有文章

#### 3.1.1路由

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

#### 3.1.2 视图

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
### 3.2 查看某一个作者的文章

#### 3.2.1视图

视图文件使用同一个list文件，实现模板的复用

传入一个用户id 通过查询字符串的形式
```
<a href="/article/list?user=<%=article.user._id%>"><a>

```

#### 3.2.1路由

增加一个查询条件
```
var user = req.query.user;
var query = {};

if(user){query['user']=user}

 Model('Article').find(query) // 添加上查询条件

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
## 5 删除

### 5.1 视图

```
<a class="btn btn-default" href="/article/delete/<%=article._id%>" >delete</a>

```

### 5.2 路由

```
router.get('/delete/:id', function (req,res) {
    var articleId = req.params.id;
    Model('Article').remove({_id:articleId}).then(function () {
      res.redirect('/article/list')
    })
})
```

## 6 编辑

## 6.1 视图

这里用了一个模态框做的，因为一般删除操作需要二次确认，所以做了模态框
```
<form action="/article/edit/<%=article._id %>" method="post">
    <input type="text" class="form-control" name="title" value=" <%=article.title%>  "/>
    <textarea class="form-control" name="content"  cols="30" rows="10"><%- article.content %></textarea>
    <button type="submit" class="btn btn-primary">Save changes</button>
</form>

```


## 6.2 路由

自然是post 请求了

> update $set

```
 var articleId = req.params.id;
    var article = req.body;
    Model('Article')
       .findById({_id:articleId})
       .update({$set:{title:article.title,content:article.content}})

```

后来证实这样直接修改也是对的,相当于提交内容字段 的值被修改

```
 var article = req.body;
    Model('Article').findById({_id:articleId}).update(article)
```




