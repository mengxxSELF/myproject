var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')

// 定义一个模型骨架，定义集合中字段的名称和类型

// 如果 字段名称不符合 忽略 字段 类型不符合 会报错
var personSchema = new mongoose.Schema({
    username: String, // 注意在写属性类型首字母是大写
    age: Number,
    home:String
})

// 定义modal  可以操作集合 ,类似命令行中的db.person

var personModal = mongoose.model('Person3',personSchema);


                   /* 查找范围  回调函数*/
personModal.find({}, function (err,docs) {
    if(err){
        console.log(err)
    }else{
        //console.log(docs)
    }
});


// 分页查询
// 每页两个 查询第三页的信息

var pageSize=2;
var pageNum=3;
personModal.find({},{_id:0})
    .sort({age:-1})
    .skip((pageNum-1)*pageSize)
    .limit(pageSize)
    .exec(function(err,docs){
        console.log(docs);
    });