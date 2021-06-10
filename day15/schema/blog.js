const mongoose = require('mongoose')

const blog=new mongoose.Schema({
    title:String,
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    comments:[
        {type:mongoose.Schema.Types.ObjectId,ref:'comments'}
    ]
})


module.exports=mongoose.model('Blog',blog)