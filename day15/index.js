const express =require('express')
const app= express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/newtaskx';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:
true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
))
const Blog=require('./schema/blog')
const user= require('./schema/user')
const comments=require('./schema/comment')
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/addblog',(req,res)=>{
    let data ={
        title:req.body.title,
        user:req.body.user
    }
    Blog.create(data,(err,doc)=>{
        if(err) console.log(err);
        else res.send(doc);
    })
})

app.post('/adduser',(req,res)=>{
    let data={
        name:req.body.name,
age:req.body.age
    }
    user.create(data,(err,doc)=>{
        if(err) console.log(err);
        else res.send(doc);
    })
})
app.post('/addcomment',(req,res)=>{
    let data={
        user:req.body.user,
blog:req.body.blog,
body:req.body.body
    }
    comments.create(data,(err,doc)=>{
        if(err) console.log(err);
        else{
            if(doc!== null){
                Blog.findByIdAndUpdate({_id:doc.blog},{$push:{ comments:doc._id}},(err,doc)=>{
                    if (err) console.log(err);
                    else console.log(doc);
                })
            }
        }
    })
})

app.get('/blog',(req,res)=>{
Blog.find().select("title user comment")
.populate([
    {
        path:"user",
        model:"user"
    },
    {
        path:"comments",
        model:"comments"
    }
]).exec((err,doc)=>{
    if(err)return res.json({err})
    else{
        return res.json({message:"Success",doc})
    }
})
})



app.listen(3000,()=>console.log("done"))