const express=require('express')
const router=express.Router()
const auctions=require('../schema/auction')

router.post('/addauction',(req,res)=>{
    let data= req.body
    auctions.create(data,(err,doc)=>{
        if(err) console.log(err);
        else res.send({"doc->":doc})
    })
})

router.get('/viewauction',(req,res)=>{
    auctions.find({}).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})

router.post('/deleteauction',(req,res)=>{
    auctions.findByIdAndDelete(req.body.id).exec((err,doc)=>{
        if(err) console.log(err);
        else res.send(doc)
    })
})

// const socket= io('http//localhost:3000')

// socket.console('connection')

module.exports=router