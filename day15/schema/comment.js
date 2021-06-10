const mongoose=require('mongoose');


const comment=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    blog:{type:mongoose.Schema.Types.ObjectId,ref:'Blog'},
    body:String
})

module.exports=mongoose.model('comments',comment)