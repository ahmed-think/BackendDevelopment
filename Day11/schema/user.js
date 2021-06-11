const mongoose=require('mongoose');


const user_schema= mongoose.Schema({
    id:Number,
    username:String,
    useremail:String,
    pasword:String,
    verification:String,
    status:String,
    isloggedin:String,
    mycourses:[ {type:mongoose.Schema.Types.ObjectId,ref:'course'}]
})

module.exports=mongoose.model("usar",user_schema)