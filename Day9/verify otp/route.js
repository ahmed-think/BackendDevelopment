const express=require('express')
const route=express.Router();
const {users}=require('../user/route')

const{userv}=require('../user/route')
route.post('/',(req,res)=>{
    console.log(userv);
    for(const x of userv){
        if(x.reqotp===req.body.otp && x.email===req.body.email){
for (const t of users) {
    if(t.useremail===x.email){
        return t.authurization=true
    }
}
res.send("done")
}else if(x.email===req.body.email && x.reqotp!==req.body.otp ){
    res.send("wrong otp")
}}

})



module.exports=route