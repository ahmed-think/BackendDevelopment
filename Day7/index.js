const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Get members
app.use('/api/users',require('./user/User'));

//get product
app.use('/api/product',require('./product/product'));

//get order
app.use('/api/order',require('./order/order'));

const  Port= process.env.Port || 3000;
app.listen(Port,()=> console.log(`server listing on ${Port}`))
