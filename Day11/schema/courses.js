const mongoose=require('mongoose')


const course=new mongoose.Schema({
    courseid:Number,
    coursecover:String,
    coursename:String,
    courseDiscription:String,
    courseduration:Number,
    pre_requisite:String,
    courseprice:Number,
    courselecture:[String]
})



module.exports=mongoose.model("course",course)