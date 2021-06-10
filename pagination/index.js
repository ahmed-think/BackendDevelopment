const express =require('express')
const app= express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/pagination';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:
true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const { parse } = require('path');


const {data}= require('./data')
const dat=require('./schema')
// for(let x of data){
//     dat.create(x,(er,doc)=>{
//         if (er) console.log(er);
//         else console.log(doc);
//     })
// }

app.get('/',page(dat),(req,res)=>{
    res.send(res.page)
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
app.listen(3000,()=>console.log("done "))