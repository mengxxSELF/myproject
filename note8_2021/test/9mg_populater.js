var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')

var courseSchema = new mongoose.Schema({
    name:String
})
// 根据schema 创建模型
var CourseModel = mongoose.model('Course',courseSchema);

// 创建人的schema
var studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // 外键 别的集合的主键
    course:{
        type:mongoose.Schema.Types.ObjectId, // 类型是对象id
        ref:'Course' //表示这个 course 属性 的值 引用的是 Course 模型
    }
});

var studentModel = mongoose.model('Student', studentSchema);
CourseModel.create({
    name: 'node.js'
}, function (err, course) {
    studentModel.create({
        name: '张三',
        course: course._id
    }, function (err, student) {
                                           /* 传入的是外键   populate功能是 将对象id 转为 对应的对象    */
        //populate 方法负责把ID转成对象
        // exec 表示准备工作做好了可以像数据库发起查询

        studentModel.findById(student._id).populate('course').exec(function(err,doc){
            console.log(doc);
        })
    })
})

