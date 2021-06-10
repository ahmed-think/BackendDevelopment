 const express=require('express');
 const route =express.Router();
const tasks=require('./schema')
const multer = require("multer");
const fs=require('fs')
var upload = multer({ dest: __dirname + '/task/' }); //setting the default folder for multer

route.get('/',(req,res)=>{
    async function a(){
    const a= await tasks.find({},(error,data)=>{
     if (error){ console.log(err);}
     else {res.send(data);
    console.log("done");}
})}
a();

})

 var f;
 async function s(){
    f= await tasks.find({},(error,faa)=>{
      if (error){ console.log(err);}
      else {console.log(faa);
     }
 }).countDocuments()}
 s()

 //add
 route.post('/addTask',upload.single('task'),async (req,res)=>{
     await fs.readFile(req.file.path,(err,contents)=>{
         if(err)return res.json({message:"Err",err})
         else{
            let ts = Date.now();

            let date_ob = new Date(ts);
            let date = date_ob.getDate();
            let month = date_ob.getMonth() + 1;
            let year = date_ob.getFullYear();
            console.log(year + "-" + month + "-" + date);
          
             let data={
                ID:748935,
                name:req.body.name,
                descrpt:req.body.descrpt,
                Skills:req.body.Skills,
                // date:[date + "-" + month + "-" + year],
                date:req.body.Date,
                file:req.file.filename
             }
             tasks.create(data,(err,doc)=>{
                 if(err)return res.json({message:"Failed",err})
                 else{
                    return res.json({message:"Suuccess",doc})
                 }
             })
         }
     })
 })

//  route.post('/insert',upload.single('task'),(req,res)=>{
//      var data;
//      let ts = Date.now();

//      let date_ob = new Date(ts);
//      let date = date_ob.getDate();
//      let month = date_ob.getMonth() + 1;
//      let year = date_ob.getFullYear();
//      console.log(year + "-" + month + "-" + date);
   

//      async function a(){
//         await fs.readFile(req.file.path, (err, contents) => {
//              console.log("chal free mat ho");
//              if (err) 
//              {
//                  return res.json(handleErr(err))
//              } 
//              else 
//              {
//                data= req.body.image,
//                  data = req.file.filename}});
//      }
//      a();
    
// //         const task= new tasks({

//   //   })
//     // task.save((err,result)=>{
//       //   if(err) console.log(err);
//         // else console.log(result);
//          //console.log(data);
//      //})
//      let dataObj = {
//         ID:f,
//         name:req.body.name,
//         descrpt:req.body.descrpt,
//         file:data,
//         Skills:req.body.Skills,
//         date:[year + "-" + month + "-" + date]
//      }
//      console.log('data--->',dataObj)
//      tasks.create(dataObj,(err,doc)=>{
//          if(err)return res.json({mesag:"Failed",err})
//          else{
//              console.log('data->',doc)
//              return res.json({message:"Success",doc})
//          }
//      })
//      //res.send("done")
//  })



route.put('/update',(req,res)=>{

})





 module.exports=route;