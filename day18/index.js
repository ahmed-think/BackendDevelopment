const express = require('express');
const app = express();
var http = require('http')
var server = http.createServer(app);
// const io=require('socket.io')(server)
const client = require('socket.io').listen(server).sockets;
// const client=require('socket.io').listen(app).sockets
const mongoose = require('mongoose')

const mongoDB = 'mongodb://localhost/socketio';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.on('connection',(socket)=>{
    socket.emit('connecteddd',{
        message:"Connection Successfull"
    })
    socket.on('messageReceived',(data)=>{
        console.log('data--->',data)
        socket.emit('newMessage',data)
    })
    socket.broadcast.emit('send',(s)=>{
        socket.emit(s)
    })
})

app.use('/register',require('./model/register'))

server.listen(3000, () => console.log("listen"))