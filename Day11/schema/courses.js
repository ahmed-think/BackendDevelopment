const mongoose=require('mongoose')


const course=new mongoose.Schema({
    courseid:Number,
    coursecover:Schema.Type.Mixed,
    coursename:String,
    courseDiscription:String,
    courseduration:Number,
    pre_requisite:String,
    courseprice:Float,
    courselecture:[Schema.Type.Mixed]
})



module.exports=mongoose.model("course",course)