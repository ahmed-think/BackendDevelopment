const mongoose=require('mongoose')
//creating geolocation schema
const GeoSchema=new mongoose.Schema({
    type:
    {
        type:String,
        default:"Point"

    },
    coordinates:
    {
        type:[Number]
    }
})

const driverSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name Fileld is required']
    },
    car:{
        type:String
    },
    available:{
        type:Boolean,
        default:false
    },
    geometry:GeoSchema

})
driverSchema.index({ geometry: '2dsphere' });
module.exports=mongoose.model("driver",driverSchema)
