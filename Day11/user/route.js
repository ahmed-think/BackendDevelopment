const express=require('express')
const route=express.Router();
const  crypto = require('crypto');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const usar=require('../schema/user')
var users=[];
var user=[];
const encrypt=function(pass){
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(`${pass}`, 'utf8', 'hex')
    return mystr += mykey.final('hex');
    ;}
    const decrypt=(pass)=>{
      var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
      var mystr = mykey.update(`${pass}`, 'hex', 'utf8')
      return mystr += mykey.final('utf8');
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rashid.sj91@gmail.com',
          pass: 'shahidjamal'
        }
      });
      const otp=otpGenerator.generate(6, { upperCase: false, specialChars: false })
     var unblock=[]
     var block=[]
    


route.post('/',(req,res)=>{
    const pass=req.body.pasword
    if(users.length==0 && req.body.email!=usar.find({useremail:req.body.email})){
      const signup=new usar({
      id:users.length+1,
      username:req.body.name,
      useremail:req.body.email,
      pasword:encrypt(pass),
      verification:false,
      status:"unblock",
      isloggedin:"false"
          })
          signup.save((err,result)=>{
            if(err)console.log(err)
            else console.log(result);
          })
          users.push(signup)}else{
    users.forEach(ele=>{
      if(ele.useremail===req.body.email){
        res.send("email exist")
      }else if(req.body.email!=usar.find({email:req.body.email})){
        const signup=new usar({
          id:users.length+1,
          username:req.body.name,
          useremail:req.body.email,
          pasword:encrypt(pass),
          verification:false,
          status:"ublock",
          isloggedin:"false"
              })
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




route.post('/login',(req,res)=>{
  var pass;
  // console.log( pas=decrypt("863c0a4c597abd9777f968ff57c61aae"));
 async function a(){
   pass=await usar.findOne({useremail:req.body.email},'useremail pasword verification status',async function(err,re){
if(err){
  console.log(err);
}else{
 return (re.pasword);
}
 })
 if(req.body.email!==pass.useremail) {
  res.send("invalid email")
}else if(req.body.pasword!==decrypt(pass.pasword)){
  res.send("invalid pasword")
}else if(pass.verification===false){
  res.send("please verify your email")
}else if(pass.status!=="unblock"){
  res.send("you are blocked by admin")
}else{

  usar.updateOne({useremail:req.body.email},{isloggedin:"true"},function(err,doc){
    if(err){
        console.log(err)
    }else {
        console.log(doc);
    }
  })
  res.send("successfully logged in")
}
};
 a();

})






module.exports=route;
module.exports.users=users;
module.exports.block=block;
module.exports.user=user;
module.exports.unblock=unblock;
