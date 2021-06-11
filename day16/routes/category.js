const express=require('express');
const category = require('../schema/Category');
const route=express.Router();

const multer = require("multer");
var upload = multer({ dest: __dirname + '/categoryimage/' }); //setting the default folder for multer

route.post('/addcategory',upload.single('image'),(req,res)=>{
let data={
    name:req.body.name,
    categoryimage:req.file.filename
}
category.create(data,(err,doc)=>{
    if(err) console.log(err);
    else res.send(doc);
})
})

route.post('/disable',async(req,res)=>
{
    category.findOneAndUpdate({name:req.body.name},{status:req.body.status},{new:true}).exec((err,doc)=>{
        if (err) console.log(err);
        else{
            res.send(doc);
        };
    });
});


route.get('/',(req,res)=>{
    category.find({status:true}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})


module.exports=route