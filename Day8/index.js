
const express=require('express');
const app=express();
const fs=require('fs');
const { basename } = require('path');
const f=fs;
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//make directory
app.use('/make directory',require('./make directory/route'))

//rename directory
app.use('/rename directory',require('./rename/route'))


const AdmZip = require('adm-zip');
const file = new AdmZip();
file.addLocalFolder('./make directory','./')



app.listen(3000,()=>console.log("listen"))