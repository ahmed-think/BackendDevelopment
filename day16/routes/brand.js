const express=require('express');
const brand = require('../schema/Brand');
const route=express.Router();

const multer = require("multer");
var upload = multer({ dest: __dirname + '/brandimage/' }); //setting the default folder for multer

route.post('/addbrand',upload.single('image'),(req,res)=>{
let data={
    name:req.body.name,
    Picture:req.file.filename
}
brand.create(data,(err,doc)=>{
    if(err) console.log(err);
    else res.send(doc);
})
})

route.post('/disable',async(req,res)=>
{
    brand.findOneAndUpdate({name:req.body.name},{status:req.body.status},{new:true}).exec((err,doc)=>{
        if (err) console.log(err);
        else{
            res.send(doc);
        };
    });
});


route.get('/showenable',(req,res)=>{
    brand.find({status:true}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})
route.get('/showdisable',(req,res)=>{
    brand.find({status:false}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})

route.post('/brandshow',(req,res)=>{
    brand.find({name:req.body.name}).exec((err,doc)=>{
        if(err) console.log(err);
        else {
            brand.findById({brandname:doc._id},"name description producttype price dose Picture CategoryId ")
            .populate('CategoryId',"name  categoryimage")
            .exec((err,doc)=>{
                if(err) console.log(err);
                else res.send(doc);
            })
        }
    })
})


module.exports=route