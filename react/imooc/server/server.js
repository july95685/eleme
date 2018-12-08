const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter)

// 使用imooc集合，没有回西安见


//类似sql表的概念，mongodb有文档，字段
// const User = mongoose.model('user',new mongoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))


// app.get('/',function(res,req){
//     req.send('<h1>hello world</h1>')
// })
// app.get('/data',function(res,req){
//     // req.json({
//     //     name:'hello world',
//     //     num: 8
//     // })
//     User.find({},function(err,doc){
//         if (!err) {
//             req.json(doc)
//         } else {
//             req.send(err)
//         }
//     })
// })
// app.get('/delete',function(res,req){
//     User.remove({age:18},function(err,doc){
//         if (!err) {
//             req.json(doc)
//         } else {
//             req.send(err)
//         }
//     })
// })
// app.get('/add',function(res,req){
//     User.create({
//         user:'imooc',
//         age: 18
//     }, function(err,doc) {
//         if (!err) {
//             req.json(doc)
//         } else {
//             req.send(err)
//         }
//     })
// })
app.listen(9093,function(){
    console.log('node is start at 9093')
})