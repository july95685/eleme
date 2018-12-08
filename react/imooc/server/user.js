const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
Router.get('/list',function() {
    User.find({},function(req,doc) {
        return res.json({doc})
    })
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    console.log(userid)
    // console.log(userid)
    if(!userid) {
        return json.dumps({code: 1})
    }
    const body = req.body
    // // console.log(body)
    User.findByIdAndUpdate({
        _id: userid
    },body,function(err,doc){
        console.log(doc)
        const data = Object.assign({},{
            code: 0,
            user: doc.user,
            type: doc.type
        },body)
        if(!doc) {
            return res.json({
                code: '1',
                msg: 'network error'
            })
        } else {
            return res.json(data)
        }
    })
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({
        user,
        pwd
    },{'pwd': 0},function(err,doc){
        if(!doc) {
            return res.json({
                code: '1',
                msg: 'password error'
            })
        } else {
            res.cookie('userid',doc._id)
            return res.json({
                code:0,
                data: doc
            })
        }
    })
})
Router.post('/register',function(req,res){
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, function(err,doc){
        if(doc) {
            return res.json({
                code:1,
                msg:'用户名重复'
            })
        }
        const userModel = new User({
            user,pwd,type
        })
        userModel.save(function(e,doc){
            if(e) {
                return res.json({
                    code:1,
                    msg:'后端出错了'
                })
            }
            const {user,type,_id} = doc
            
            res.cookie('userid',doc._id)
            return res.json({
                code:0  
            })
        })
        // User.create({
        //     user,pwd,type
        // },function(e,d){
        //     if(e) {
        //         return res.json({
        //             code:1,
        //             msg:'后端出错了'
        //         })
        //     }
        //     return res.json({
        //         code:0  
        //     })
        // })
    })
})
Router.get('/info',function(req,res){
    const { userid } = req.cookies
    if( !userid ) {
        return res.json({code:1,
            msg:'get'})
    }
    User.findOne({
        _id: userid
    },{'pwd': 0},function(err,doc){
        if(err) {
            return res.json({
                code:1,
                msg:'后端出错了'
            })
        }
        if(doc) {
            return res.json({
                code:0,
                data: doc
            })
        }
    })
})

module.exports = Router