const express=require('express');
const route =express.Router();
const users=require('../user/schema')
const tasks=require('../task/schema')

route.use('/task',require('../task/route'));

route.post('/approve',(req,res)=>{
   var pass;
    async function a(){
        pass=await users.findOne({id:req.body.id},'email name Authorize verified',async function(err,re){
     if(err){
       console.log(err);
     }else{
      return (re);
     }
      })
      if(pass.Authorize===true){
    users.updateOne({email:req.body.email},{verified:"true"},function(err,doc){
        if(err){
            console.log(err)
        }else {
            res.send(doc);
        }
    })}
    else{
        res.send("not verified")
    }}
a();
})
 
function page(model){
    return async (req,res,next)=>{
        const page =parseInt(req.query.page)
        const limit =parseInt(req.query.limit)

        const start=(page-1)*limit
        const end=page*limit

        const result={}
        if (end<await model.countDocuments().exec()){
            result.next={
                pagge:page+1,
                limit:limit
            }
        }
        if (start>0){
            result.previous={
                page:page+1,
                limit:limit
            }
        }

        result.result=await model.find().limit(limit).skip(start).exec()
        res.page=result
        next()
    }
}

var pass
route.get('/last7days',async(req,res)=>{
    
    // async function s(){
    //     pass=await tasks.find({}).sort({date: -1}).limit(7).exec((err, docs) => { 
    //         if(err)console.log(err);
    //         else res.send(docs);
    //      });
    //   console.log(pass);
// }
//       s()
var d = new Date();
d.setDate(d.getDate() - 7);
console.log(d.toString());
var e = new Date();
e.setDate(e.getDate());
console.log(e.toString());
const f= await tasks.aggregate ({$match:{date:{$lte:e,$gte:d}}})

console.log(f);

res.send(res.f)
})
route.get('/total',(req,res)=>{
    let pass
    let total=0
    async function s(){
        pass=await users.find({},' name Authorize verified amount',async function(err,re){
     if(err){
       console.log(err);
     }else{
      return (re);
     }
      }).count()
    // pass.forEach(element => {
    //     total+=element.amount
    // });
    for (let x=0;x<pass.length;x++){
        total+=pass[x].amount
    }
    res.send({total:`${total}`});    
}
    s();


})


 

module.exports=route;