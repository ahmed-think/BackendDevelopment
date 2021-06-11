const express =require('express')
const app= express();
const mongoose=require('mongoose')

const mongoDB = 'mongodb://localhost/pharmashop';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:
true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/category',require('./routes/category'))
app.use('/brand',require('./routes/brand'))
app.use('/product',require('./routes/product'))


app.listen(3000,()=>console.log(`listening to port ${3000}`))