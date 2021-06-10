const mongoose = require('mongoose')


const schema =new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String
})


module.exports=mongoose.model('dat',schema)