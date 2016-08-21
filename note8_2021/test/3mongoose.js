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
/*var people=[];
for(var i=0;i<10;i++){
    people.push({age:i,username:'鹿晗'+i })
}*/


// 创建一个文档
/*personModal.create( people  , function (err,doc) {
    if(err){
        console.log(err)
    }else{
       // console.log(doc)
    }
})*/


personModal.find({},{username:1,_id:0}, function (err,docs) {
    //console.log(docs)
})
personModal.find({age:{$gt:5}},{_id:0}, function (err,docs) {
  //  console.log(docs)
})

// 年龄是 3 6 7
personModal.find({age:{$in:[3,6,7]}},{_id:0}, function (err,docs) {
  //  console.log(docs)
})
// 或
personModal.find({$or:[{age:5},{age:8}]},{_id:0}, function (err,docs) {
   // console.log(docs)
})
// 更新数据
personModal.update({age:5},{$set:{home:'北京'}}, function (err,docs) {
    console.log(docs)
})
// 判断某个字段是否存在
personModal.find({home:{$exists:true}},{_id:0}, function (err,docs) {
    console.log(docs)
})


