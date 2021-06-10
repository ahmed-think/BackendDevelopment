const mongoose=require('mongoose');
const Revenue=new mongoose.Schema({
    Date:{
        type:Date
    },
    Revenue:{
type:Number
    }
})
const Company=new mongoose.Schema({
id:Number,
Company_name:String,
company_city:String,
d:[{String:Number}]
})



module.exports=mongoose.model('company',Company);