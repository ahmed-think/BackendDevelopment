const express=require('express')
const route=express.Router();
const {users}=require('../user/route')

const{user}=require('../user/route')
route.post('/',(req,res)=>{
    // console.log(users);
    for(const x of user){
        // console.log(x);
        if(x.email===req.body.email && x.reqotp===req.body.otp ){
for (const t of users) {
    console.log(t);
    if(t.useremail===x.email){
        t.authurization=true
    }
}
}else if(x.email===req.body.email && x.reqotp!==req.body.otp ){
    res.send("wrong otp")
}}
res.send(users)
})



module.exports=route