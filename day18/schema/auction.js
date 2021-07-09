const mongoose=require('mongoose')


const Autionmodel= new mongoose.Schema({
    sellername:String,
    status:{type:String, default:false},
    items:[{
        it_name:String,
    baseprice:Number,
    highiestbid:{type:Number,default:0}
}]
})

module.exports=mongoose.model('auctions',Autionmodel)