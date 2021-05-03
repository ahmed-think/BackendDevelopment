
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



app.post('/',(req,res)=>{
    fs.readdir(`./${req.body.folder}`, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
           if(file===req.body.file){
               res.sendFile(file)
           }
        });
    });
})








app.listen(3000,()=>console.log("listen"))