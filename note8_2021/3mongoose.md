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

# 创建数据库

# 定义集合信息 定义Modal  创建实体

> 在mongo vue 中查看的时候 数据库名字是  定义的模型名的小写然后转复数






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















