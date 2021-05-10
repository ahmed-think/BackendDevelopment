const express = require('express')
const route=express.Router();
const {users,block,unblock}=require('../user/route')


//get all users
route.get('/Allusers',(req,res)=>res.send(users));
//get blocked users
route.get('/block',(req,res)=>res.send(block));
//get all unblock users
route.get('/unblock',(req,res)=>res.send(unblock));
// block or unblock a user
route. post('/action',(req,res)=>{
    users.forEach(element => {
        if(element.useremail===req.body.email){
            if(req.body.action==="block" && element.status==="block"){
                res.send("user is already blocked")
            }else if (req.body.action==="unblock"&&element.status==="unblock"){
                res.send("user is already unblock")
            }else{
                element.status=req.body.action
            }
        }
    });
    users.forEach(e=>{
        if(e.status==="unblock"){
          unblock.push(e);
        }else if(e.status==="block"){
          block.push(e)
        }
      })
    res.send(users)
})

module.exports=route