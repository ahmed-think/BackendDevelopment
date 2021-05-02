const express=require('express');
const { parse } = require('path');
const router=express.Router();
const path=require('path');


var user=[
    {
     id: 1,
     name:"Ahmed",
     email:"ahmed.afridi091@gmail.com"
    },
    {
        id: 2,
        name:"Hamza",
        email:"hamza1@gmail.com"
       }
]
//get All users
router.get('/',(req,res)=>res.json(user))

//get siingle user by id 
router.get('/:id',(req,res)=>{
    const found=user.some(user=>user.id===parseInt(req.params.id));

    if(found){
        res.json(user.filter(user=>user.id===parseInt(req.params.id)));
    } else{
        res.status(400).json({msg:`no user found with id ${req.params.id} `})

    }
});

//add a user
router.post('/',(req,res)=>{
    const add_user={
        id:user.length+1,
        name:req.body.name,
        email:req.body.email
    }
if(!add_user.name){
    return  res.status(400).json({msg:`please add name `})
}else if( !add_user.email){
    return  res.status(400).json({msg:`please add email `})
}
user.push(add_user)
res.json(user)
})



module.exports=router;
module.exports.users=user;