const express=require('express');
const app=express();



app.use(express.json());
app.use(express.urlencoded({extended: false}));






//signup user
app.use('/signup',require('./user/route'))
//verifyotp
app.use('/verifyotp',require('./verify otp/route'))
//admin route
app.use('/admin',require('./adminn/route'))

// var crypto = require('crypto'); 

// var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr); 
app.listen(3000,()=>console.log("listen"))



