const express=require('express')
const route=express.Router();
const order=require('../schema/Order')

route.post('/status',(req,res)=>{
    let statusObje = {
        status:req.body.status,
        date:new Date()
    }
    order.findByIdAndUpdate(req.body,{$push:{Status:statusObje}},{new:true}).exec((er,doc)=>{
        if (er) console.log(er);
        else console.log(doc);
    })
})
const date=new Date()

module.exports=route