const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')

const f=require('fs');
const fs=f;



route.post('/',(req,res)=>{
    for (const x of req.body.file) {
    fs.copyFile(`./${req.body.folder}${x}`, `./${req.body.newfolder}${x}`, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });   
    }
      res.send("done")
})

module.exports=route;