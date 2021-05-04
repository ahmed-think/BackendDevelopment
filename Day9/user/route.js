const express=require('express')
const route=express.Router();
const  crypto = require('crypto');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

var users=[];
var usern=[];
const encrypt=function(pass){
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(`${pass}`, 'utf8', 'hex')
    return mystr += mykey.final('hex');
    
    // return console.log(mystr)
    ;}

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rashid.sj91@gmail.com',
          pass: 'shahidjamal'
        }
      });
      const otp=otpGenerator.generate(6, { upperCase: false, specialChars: false })
     



route.post('/',(req,res)=>{
    const pass=req.body.pasword
    const signup={
id:users.length+1,
username:req.body.name,
useremail:req.body.email,
pasword:encrypt(pass),
authurization:false
    }
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


usern.push(a)
users.push(signup)
res.send(users);
})


route.get('/',(req,res)=>{
res.send(usernds)
})

module.exports.users=users;
module.exports.userv=usern;
 module.exports=route;