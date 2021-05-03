const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')
const f=require('fs')
const fs=f;
const archiver = require('archiver');

route.post('/',middle.midle,(req,res)=>{
    const output = fs.createWriteStream(`${req.body.folder}.zip`);
    const archive = archiver('zip');
    
    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    
    archive.on('error', function(err){
        throw err;
    });
    
    archive.pipe(output);
    
    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(`./${req.body.folder}`, false);
    
    // append files from a sub-directory and naming it `new-subdir` within the archive
    // archive.directory('subdir/', 'new-subdir');
    
    archive.finalize();
})


module.exports=route