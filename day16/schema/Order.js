const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productid:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
    quantity:Number
})

const OrderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    orderprescription:{type:String,required:true},
    itemscount:Number,
    total:Number,
    product:[productSchema],
    Status:{type:String,default:"pending"},      //pending, rejected, accepted, delivered
    createdDate:{
        type:Date,
        default:Date.now()
    }
})