const express=require('express');
const app=express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/task';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:
true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
));






app.use(express.json());
app.use(express.urlencoded({extended: false}));






//signup user
app.use('/signup',require('./user/route'))
//verifyotp
app.use('/verifyotp',require('./verify otp/route'))
//admin route
app.use('/admin',require('./adminn/route'))

// var crypto = require('crypto'); 
app.use('/',require('./courses/route'))

app.listen(3000,()=>console.log("listen"))



