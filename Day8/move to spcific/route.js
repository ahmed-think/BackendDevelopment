const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')



route.post('/',(req,res)=>{
    fs.rename(`./${req.body.filename}`, `./${req.body.newpath}${basename(req.body.filename)}`, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully renamed the directory.")
        }
      })
})


module.exports=route