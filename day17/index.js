const express =require('express')
const app= express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/Assessment';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopotrue:true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`)})