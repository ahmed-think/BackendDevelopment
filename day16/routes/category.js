const express=require('express');
const category = require('../schema/Category');
const products = require('../schema/Products');
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




route.get('/showenable',(req,res)=>{
    category.find({status:true}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})


route.get('/showdisable',(req,res)=>{
    category.find({status:false}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})


route.post('/categoryshow',(req,res)=>{
    category.find({name:req.body.name}).exec((err,doc)=>{
        if(err) console.log(err);
        else {
            products.findById({CategoryId:doc._id},"name description producttype price dose Picture brandname")
            .populate('brandname',"name Picture")
            .exec((err,doc)=>{
                if(err) console.log(err);
                else res.send(doc);
            })
        }
    })
})

module.exports=route