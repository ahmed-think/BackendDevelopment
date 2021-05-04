
const express=require('express');
const app=express();
const fs=require('fs');
const { basename } = require('path');
const f=fs;
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//make directory
app.use('/makedirectory',require('./make directory/route'))

//rename directory
app.use('/renamedirectory',require('./rename/route'))

//make  zip of directory
app.use('/makezip',require('./make zip/route'))

//move a file to spcific folder
app.use('/movefile',require('./move to spcific/route'))

//copy file 
app.use('/copyfile',require('./copy file/route'))




app.listen(3000,()=>console.log("listen"))