const mongoose=require('mongoose')
const BrandSchema=new mongoose.Schema({
    name:String,
    Picture:String,
    status:{type:Boolean,default:true},
    // category:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
    product:[{type:mongoose.Schema.Types.ObjectId,ref:"products"}]
    
})
module.exports=mongoose.model('brand',BrandSchema)