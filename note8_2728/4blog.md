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
* 浏览量
* 评论
* 关键字搜索
* 排序


## 7  PV  浏览量  Pageviews

> 在模型骨架中增加该字段

```
    pv:{type:Number,default:0} , /* 文章浏览量 */

```

### 7.1 视图

```
<b>page views</b> <%=article.pv%>
```
### 7.2 路由

访问一次该路由，PV值加一

```
Model('Article').update({_id:articleId},{ $inc :{ pv:1 }}).then(function () {
        return Model('Article').findById({_id:articleId}).populate('comments.user')
    }).then(function (doc) {
        res.render('article/detail',{title:'文章详情' ,article:doc})
    })

```

> 这种写法为什么不对
```
 Model('Article').update({_id:articleId},{ $inc :{ pv:1 }}).populate('comments.user').exec().then(function (doc) {
        res.render('article/detail',{title:'文章详情' ,article:doc})
    })
```
## 8 评论文章

> 先去article 的模型骨架增加评论字段

```
comments:[
   content:String,
   createAt:{ type:Date, default:Date now()},
   user:{type:ObjectId,ref:'User'}
]

```

### 8.1  评论  [有问题 需处理]

#### 8.1.1视图
通过form表单提交评论信息

```
<form action='/article/comment/<%=article._id%>' method ='post'  >

</form>
```

#### 8.1.2  路由

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


### 8.2 删除文章评论

#### 8.2.1视图

#### 8.2.1路由

> 要考虑有没有删除权限

没写出来呢



## 9 关键字搜索

### 9.1 视图

在头部添加form表单

```
 <form action='/article/list?' class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <input name="keyword" type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
```


### 9.2 路由



> 主要是通过正则 来查找数据库

注意这里的关键字keyword是通过req.query.keyword获得的
因为表单是get提交方式，所以是查询字符串格式不是JSON请求体


> find({user:username , $or:[age:20,num:3]})   或的查询方式

```
if(keyword){
        var filter = new RegExp(keyword);
        query['$or']=[{content:filter},{title:filter}]
    }
```









