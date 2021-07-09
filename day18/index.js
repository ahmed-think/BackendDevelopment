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
const auction= require('./schema/auction')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.on('connection',(socket)=>{
socket.on('startauction',(d)=>{
    console.log(d.sellername);
if(d.sellername!==null){
    console.log(d.sellername)
    auction.findByIdAndUpdate({_id:d.id},{status:true},{new:true}).exec((err,doc)=>{
        if(err) console.log(err);
        else {
            console.log(doc);
            socket.broadcast.emit('started',{Auction:`Auction named ${doc.sellername} is started details are \n${doc}`})
        }
    })
}
})
// socket.on('joinroom',(room)=>{
//     socket.join(room.sellername)

// })
socket.on('joinauction',(s)=>{
    auction.findById({_id:s.id}).exec((err,doc)=>{
        if(err) console.log(err);
        else {
            // console.log(doc);
            if(doc.status!==false){
            socket.join(`${s.sellername}`)
            // console.log(socket.id);
            socket.emit('joined',{msg:`you are join in auction named ${s.sellername}`})
        }else{
            socket.emit('joined',{msg:` auction named ${s.sellername} is not started yet`})
            
        }
    }
    })
})

socket.on('budding',(s)=>{
    auction.findById({_id:s.id}).exec((err,doc)=>{
        if(err) console.log(err);
        else{
            // console.log(doc.items);
           for(let i of doc.items){
            //    console.log("a");
            //    console.log(i._id);
            //    console.log(s.it_id);
               if(i._id==s.it_id){
                //    console.log("q");
                if(i.highiestbid>s.bid || i.baseprice>s.bid){
                    // client.in("ahmed").emit('joine',{msg:"done"})
                    socket.emit('budding',{msg:"can not update because bid is smaller than highiest bbid"})
            }else{
                console.log("done");
               console.log(s.it_id);
               console.log(doc._id);
                auction.findOneAndUpdate({_id:doc._id,"items._id":i._id},{$set:{"items.$.highiestbid":s.bid}}).exec((err,dos)=>{
                    if(err) console.log(err);
                    else{
                        console.log("s");
                        client.in(s.sellername).emit('joine',{msg:`highiest bid of item name ${i.it_name} is increase to ${s.bid}`})
                    }
                })
            }
               }
           }

        }
    })
})

// socket.on('getAllRooms', (usersByRoom) => {
//     Object.keys(usersByRoom).forEach(roomName =>
//       console.log(roomName, usersByRoom[roomName]))
//   })

})

app.use('/register',require('./model/register'))

server.listen(3000, () => console.log("listen"))