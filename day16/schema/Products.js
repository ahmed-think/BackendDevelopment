const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    name:String,
    description:String,
    producttype:String,
    price:Number,
    instock:Number,
    dose:[Number],
    Picture:String,
    brandname:{type:mongoose.Schema.Types.ObjectId,ref:'brand'},
    CategoryId:{type:mongoose.Schema.Types.ObjectId ,ref:'category'}
})

module.exports=mongoose.model('products',ProductSchema)