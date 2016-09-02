## 目录问题

在app.js 中配置了 静态文件目录public
所以在引入外部文件的时候，
```
<link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.css">

```
前面的那个 /  是指代的public

从服务器起页面，按照app,js的视角




## 编辑文章

通过一个隐藏的input，记录文章_id

根据传入的_id ，如果有该值表明是在修改文章 不然就是在新建文章
```
<%=article._id%>
<%=article.title %>
<%=article.content%>

```
是要写到页面中

然后由于新建文章和修改文章是使用的同一个模板
当新建文章的时候，是没有article 字段的所以以上三个
```
<%=article._id%>
<%=article.title %>
<%=article.content%>
```

是不存在的，所以需要在render页面的时候设置

> {title:'new article',article:{}

```
router.get('/add',[auth.mustLogin ],function(req,res){
    res.render('article/add',{title:'new article',article:{}});
});

```

> delete article._id;

新建文章的时候，表单中有提交字段_id 但是为空值。而存在数据库的时候，需_id
如果没有_id 就会自动给一个_id的值，如果有就按照传入的值
现在传入的_id是一个空的，是不合法字符 ，所以需要删除该字段,让服务器自动赋值_id




## 对于相同的路由，如果有静态路由和动态路由，会访问到静态文件中去的

因为在app,js中 静态文件中间件在路由设置的前面写的，如果静态路由可以匹配到，就会去匹配到静态路由文件
```
//静态文件中间件 根目录是public目录,所以在页面中引用静态文件的时候必须以public目录作为根目录
app.use(express.static(path.join(__dirname, 'public')));

//当路径是/开头的话交由routes处理
app.use('/', routes);
//当路径/users开头的话交由users
app.use('/user', user);
app.use('/article', article);
```

## 搜索 router.get('/list',[auth.mustLogin ],function(req,res){})


在header 添加 通过keyword

```
if(keyword){
        var filter = new RegExp(keyword);
        // 如果title 或者content 符合正则
        query['$or'] = [{ title:filter },{ content:filter }];
    }
```

页面渲染没有 keyword  所以在

```
 // 所有文章列表
 res.render('article/list',{title:'文章',articles:docs , keyword:keyword})
```

## 分页

```
var pageNum= parseInt(  req.query.pageNum || 1 ); /* 当前页 */
var pageSize= parseInt(  req.query.pageSize || 3 ); /*  每一页有几条 */

```


在 list.html 中

```
 <%
    for(var i=1;i<=totalPages;i++){%>
      <li class="<%=pageNum==i?'active':''%>"><a href="/article/list?pageNum=<%=i%>&pageSize=<%=pageSize%>"><%=i%></a></li>
    <%}
 %>
```
### 点击前后页 goto()


## 文章排序  goto()

list.html

```
<script>
    function goto(pageNum){
        var pageSize = $('').val();
    }
</script>

```

> .sort()


按照发布时间正序
```
sort({createAt:1})

```




## req.query  查询字符串  req.body  请求体



## 文章评论

###先往模型骨架中增加评论字段
```
 // 增加评论字段是一个数组 里面是对象  user createAt content
    comments:[{user: {type:ObjectId,ref:'User'} , createAt:{type:Date,default:Date.now()} , content:String}],

```
### 改模板视图

### 更改路由

```
populate('comments.user');

```


##  文章浏览数 pv + 1

添加模型骨架字段
```
 pv:{ type:Number , default:0}, /*  文章浏览量  点击详情页 +1 */

```
### 改模板视图

```
 <%
        //迭代文章的评论数组

        article.comments.forEach(function(comment){%>
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="<%=comment.user.avatar%>">
                </a>
            </div>
            <div class="media-body">
                <p><%-comment.content%></p>
                <p>发表时间:<%=comment.createAt.toLocaleString()%></p>
            </div>
        </div>
        <%})
        %>
```


### 更改路由

```
Model('Article').update({_id:articleId} , { $inc :{ pv:1 }}).then(function () {
        return  Model('Article').findById(articleId).populate('comments.user');
    })

```




## 404 页面
aap.js

```


```

## 日志



## 发布














# 问题

*  webstorm 生成两个映射文件

 配置问题  setting> file watchs 配置的问题

* 右键 git 消失

不是git仓库文件没有git

* 自己写的那个编辑修改之后pre代码格式

```
<textarea class="form-control" name="content"  cols="30" rows="10">
  <%- article.content %>
</textarea>

```
不能那么写，有空格是不对的，markdown语法的问题

```
<textarea class="form-control" name="content"  cols="30" rows="10"><%- article.content %></textarea>

```
* localhost起不来  settings.js 文件

```
module.exports = {
    dbUrl:'mongodb://localhost/201605blog2'
}
```

电脑上有一个host文件
c>windows>system32>divers>etc>hosts
```
#127.0.0.1       localhost
```
 这个表示里面 localhost 被注释掉了

改回来  或者使用127.0.0.1 【等同于localhost 】
```
module.exports = {
    dbUrl:'mongodb://127.0.0.1:27017/201605blog2'
}
```








