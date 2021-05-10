const multer=require('multer')
const fileStorage=multer.diskStorage({
    destination:(req,files,cb)=>{
        cb(null,'./lectures')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:fileStorage})
app.post('/uploadimage',upload.array('lecture',2),(req,res)=>{
    console.log(req.files);
    res.send("uploaded")
})