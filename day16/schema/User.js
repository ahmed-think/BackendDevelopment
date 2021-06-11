const mongoose=require('mongoose')
const AddressSchema=new mongoose.Schema({
        addressname:String,
        location:String,
        Street:String,
        longitude:Double,
        latitude:Double    
})

const PersonSchema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    name:String,
    address:[AddressSchema],
    phnumber:Number,
    authorized:{type:Boolean,required:true}

})

module.exports=mongoose.model('person',UserSchema)
 