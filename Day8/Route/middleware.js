const express=require('express')
const route=express.Router();




route.use('/',(req,res,next)=>{
    if (req.headers['email']==="ahmed.afridi091"){
        console.log("good");
        return next();
    }else {
        res.send("baad header")
    }
 })
 

module.exports.midle=route;