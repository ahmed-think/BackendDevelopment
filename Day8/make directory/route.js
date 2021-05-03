const express=require('express')
const route=express.Router();
const middle=require('../Route/middleware')





route.post('/',middle.midle,(req,res)=>{
   
    for(const x of req.body.products){
    fs.mkdir(path.join(__dirname, `${x}`), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directories created successfully!');
        }); 
    }
   })


   module.exports=route
