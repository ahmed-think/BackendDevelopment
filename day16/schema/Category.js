const mongoose=require('mongoose')
const CategorySchema= new mongoose.Schema({
    name:String,
    categoryimage:String,
    product:[{type:mongoose.Schema.Types.ObjectId,ref:"products"}],
    status:{type:Boolean,default:true}
    })

    module.exports=mongoose.model('category',CategorySchema)