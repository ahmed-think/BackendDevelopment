const express=require('express')
const route=express.Router();
const order=require('../schema/Order')

route.post('/status',(req,res)=>{
    let statusObje = {
        status:req.body.status,
        date:new Date()
    }
    order.findByIdAndUpdate(req.body,{$push:{Status:statusObje}},{new:true}).exec((er,doc)=>{
        if (er) console.log(er);
        else console.log(doc);
    })
})
const date=new Date()

module.exports=route




app.get('/api/getFile:path', (req, res) => {
    try {
        var file = __dirname + '/../techfinderfiles/' + req.params.path;

        var filename = path.basename(file);
        var mimetype = mime.getType(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
    } catch (error) {
        return res.json(handleErr(error))
    }
})