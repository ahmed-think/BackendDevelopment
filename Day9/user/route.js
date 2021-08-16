const express=require('express')
const route=express.Router();
const  crypto = require('crypto');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

var users=[];
var user=[];
const encrypt=function(pass){
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(`${pass}`, 'utf8', 'hex')
    return mystr += mykey.final('hex');
    
    // return console.log(mystr)
    ;}

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: ,
          pass: 
        }
      });
      const otp=otpGenerator.generate(6, { upperCase: false, specialChars: false })
     var unblock=[]
     var block=[]
    


route.post('/',(req,res)=>{
    const pass=req.body.pasword
    if(users.length==0){
      const signup={
      id:users.length+1,
      username:req.body.name,
      useremail:req.body.email,
      pasword:encrypt(pass),
      authurization:false,
      status:"unblock"
          }
          users.push(signup)}else{
    users.forEach(ele=>{
      if(ele.useremail===req.body.email){
        res.send("email exist")
      }else{
        const signup={
          id:users.length+1,
          username:req.body.name,
          useremail:req.body.email,
          pasword:encrypt(pass),
          authurization:false,
          status:"ublock"
              }
              users.push(signup)
      }
    })}
    
   
const a={
 email:req.body.email,
 reqotp:otp
}
console.log(otp);
    var mailOptions = {
        from: 'rashid.sj91@gmail.com',
        to: `${req.body.email}`,
        subject: 'Sending Email using Node.js',
        text: `${otp}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


      users.forEach(e=>{
        if(e.status==="unblock"){
          unblock.push(e);
        }else if(e.status==="block"){
          block.push(e)
        }
      })


user.push(a)
res.send(users);
})



module.exports=route;
module.exports.users=users;
module.exports.block=block;
module.exports.user=user;
module.exports.unblock=unblock;
