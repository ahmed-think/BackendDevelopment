const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')






route.post('/',middle.midle,(req,res)=>{
    fs.rename(`./${req.body.oldname}`, `./${req.body.newname}`, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully renamed the directory.")
        }
      })
})


module.exports=route