const mongoose=require('mongoose')


const course=new mongoose.Schema({
    courseid:Number,
    coursecover:Schema.Type.Mixed,
    coursename:String,
    courseDiscription:String,
    courseduration:Number,
    pre_requisite:String,
    courselecture:[Schema.Type.Mixed]
})



