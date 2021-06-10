const express=require('express');
const app=express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/newtask';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:
true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
))

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//admin route
app.use('/admin',require('./admin/route'));

app.use('/user',require('./user/route'))

app.listen(3000,()=>console.log("listen"))