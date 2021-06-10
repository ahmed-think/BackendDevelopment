const mongoose=require('mongoose');
// const validator = require('validator');
const UserrSchema=new mongoose.Schema({
        

        email: { type: String, unique: true, required: true },
        name:String,
        gender:String,
        joiningDate:{
                type:Date,
                default:Date.now()
        },
        Qualification:String,
        Authorize:{
                type:Boolean,
               default:false
        },
        skills:[String],
        image:String,
        amount:Number,
        verified:{
                type:String,
                default:false
        }
})

module.exports=mongoose.model('Userr',UserrSchema);