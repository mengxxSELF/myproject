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
        ref:'Course' //指明此外键是哪个集合中的外键  引用的是课程的主键
    }
});

var studentModel = mongoose.model('Student', studentSchema);
CourseModel.create({
    name: 'node.js'
}, function (err, course) {
    studentModel.create({
        name: '张三',
        course: course._id // 保存的时候只需要保存课程主键就可以了
    }, function (err, student) {
        studentModel.findById(student._id,function(err,doc){
            CourseModel.findById(doc.course, function (err,doc) {
                console.log(doc) // 这个查找对应的课程
            })
            console.log(doc);
        })
    })
})

