const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')
const  f=require('fs');
const { basename } = require('path');
const fs=f;


route.post('/',middle.midle,(req,res)=>{
  for (const x of req.body.filename) {
    fs.rename(`./${req.body.folder}${x}`, `./${req.body.newpath}${x}`, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("Successfully renamed the directory.")
      }
    })
  }
    
})


module.exports=route