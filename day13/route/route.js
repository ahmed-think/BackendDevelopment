const { createPrivateKey } = require('crypto');
const express=require('express');
const route =express.Router();

const company=require('../schem/schema')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  route.post('/insert',(req,res)=>{
    var date=[]
    let da=1
    var dat=`${da}-5-2021`
    for (let index = 0; index < 31; index++) {
        var dat=`${da}-5-2021`
    date.push({[dat]:getRandomInt(10000)})
    da++;
    console.log(date);
}


    const set=req.body;
    for (let index = 0; index <set.length; index++){
            
        let data={
        id:set[index].id,
Company_name:set[index].Company_name,
company_city:set[index].company_city,
Revenue:[date]
    }
    company.create(data,(err,doc)=>{
        if(err)return res.json({message:"Failed",err})
        else{
           return res.json({message:"Suuccess",doc})
        }
    })
}
res.send("done")
})


route.get('/',(req,res)=>{
    async function a(){
    const a= await company.find({},(error,data)=>{
     if (error){ console.log(err);}
     else {res.send(data);
    console.log("done");}
})}
a();

})

module.exports=route;