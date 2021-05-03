const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')

const f=require('fs');
const fs=f;



route.post('/',middle.midle,(req,res)=>{
    fs.rename(`./${req.body.oldname}`, `./${req.body.newname}`, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully renamed the directory.")
        }
      })
      res.send("done")
})


module.exports=route