# mongoose




## 设置文档属性

```

 _id:Schema.Types.ObjectId,  //主键
 _fk:Schema.Types.ObjectId,  //外键 引用的别人家的主键 两个集合之间建立联系

```

例如：

```
{
 _id:'teacher1', name:'zhangsan'
}

{
 _id:'cousrse1', name:'angular',teacher:'teacher1'
}

```


# 打开服务器
后面是数据库本地存放地址

```
mongod --dbpath=D:\Mongodb\data

```

# 打开客户端

> 已经配置过环境变量，所以可以在任何一个命令行窗口执行
如果没有，就需要进入D:\Mongodb\data 就是你的本地数据库地址中 执行这个

```
mongo


```


# 定义模型骨架 schema

```
var studentSchema = new mongoose.Schema({
  // 规定模型应该有的属性以及属性值的类型
  name: String,
  age:Number,
  class:Nmuber
  birthday:Date
})

```

可以存在的基本属性类型有:

字符串(String)

日期型(Date)

数值型(Number)

布尔型(Boolean)

null

数组([])

内嵌文档


# 定义集合信息 定义Modal

> 在mongo vue 中查看的时候 数据库名字是  定义的模型名的小写然后转复数

```
     // 实体名称                    // 集合名字   // 上面创建的骨架
var studentModel  = mongoose.model('Students',studentSchema);

```

## 创建实体

如果实体中的属性在原来骨架中并不存在，会忽略。如果属性类型与骨架不同，会报错

```
var studentEntity =  new studentModel({
  name: 'lh',
  age:20,
  class:3
  birthday:2015.6.7

});


```
> 实体只有一个save方法 向数据库增加该文档

```
studentEntity.save(function(err,result){
   if(!err){console.log(result)}
})


```





## 添加方法

```

//给实例添加方法 该方法与文档自身有关系
personSchema.methods.findSameAge = function (cb) {
    this.model('Person3').find({age:this.age},cb);
}


//给模型添加静态方法
personSchema.statics.findByName = function(name,cb){
    this.find({name:new RegExp(name,'i')},cb)
}


```


## model 的基本方法

* create
* update
* remove
* find  findOne findById
* sort
* skip
* limit


##  Model.create(文档数据, callback))

向集合中增加文档信息

```
myModel.create( youObj  ,function(err,res){
  ...
})


```






尝试一个分页查询

```

objModel.find({},{_id:0})
   .sort({age:-1})
   .skip(3)
   .limit(3)
   .exec(function(err,docs){console.log(docs)})


```












