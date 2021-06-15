const express =require('express')
const app= express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/pharmashop';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopotrue:true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/category',require('./routes/category'))
app.use('/brand',require('./routes/brand'))
app.use('/product',require('./routes/product'))
app.use('/order',require('./routes/order'))


// const multer = require("multer");
// var upload = multer({ dest: __dirname + '/categoryimage/' }); //setting the default folder for multer
// app.post('/',upload.array('image'),(req,res)=>{
// let data={
//     pic:req.files}
//     res.send(data)

// })

app.listen(3000,()=>console.log(`listening to port ${3000}`))