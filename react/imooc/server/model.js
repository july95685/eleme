const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const models = {
    user:{
        user:{type:String,require:true},
        pwd:{
            type:String,
            require:true
        },
        type:{
            type:String,
            require:true
        },
        avator:{
            type:String
        },
        desc:{
            type:String
        },
        text:{
            type:String
        },
        title:{
            type:String
        },
        company:{
            type:String
        },
        money:{
            type:String
        }
    },
    chat:{

    }
}

for(let m in models) {
    // console.log(m)
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}

