const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')

const f=require('fs');
const fs=f;



route.post('/',(req,res)=>{
    fs.readdir(`./${req.body.folder}`, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
           if(file===req.body.file){
               res.download(file)
           }
        });
    });
})

route.post('/download', function(req, res){
  const file = `./${req.body.folder}${req.body.filename}`;
  res.sendfile(file); // Set disposition and send it.
});

module.exports=route;