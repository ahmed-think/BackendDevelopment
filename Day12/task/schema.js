const mongoose =require('mongoose')



const task= new mongoose.Schema({
ID:Number,
name:String,
descrpt:String,
file:String,
Skills:[String],
date: String
})

module.exports=mongoose.model('tasks',task)