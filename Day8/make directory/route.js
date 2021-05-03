const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')
const path=require('path')

const f=require('fs')
const fs=f;

route.post('/',middle.midle,(req,res)=>{
   
    for(const x of req.body.names){
    fs.mkdir(path.join('./', `${x}`), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log("jh");
        }); 
    }
    res.send("done")
   })


   module.exports=route
