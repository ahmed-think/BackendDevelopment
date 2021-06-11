const express=require('express')
const route= express.Router()
const course=require('../schema/courses')



const multer=require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './uploads');
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + '-' + Date.now());
//     }
// });
var upload = multer({ dest: __dirname + '/lectures/' });
// const upload = multer({ storage: storage }).array('files', 5);
route.post('/uplaod',upload.array("files",5),(req,res)=>{
    let data =req.body
course.create(data,(err,doc)=>{
    if(err) console.log(err);
    else console.log(doc);
})
    res.send("uploaded")
})

module.exports=route









//Add additional images route
// app.put('/api/addAditionalImages', (req, res) => {
//     uploadMult(req, res, function (err) {
//         if (err) {
//             return res.json(handleErr(err))
//         }
//         else {
//             if (req.files !== undefined) {
//                 let fileData = req.files
//                 if (fileData.length ===5) {
//                     let addAditionalImages = fileData.map((file) => {
//                         return file.filename
//                     })
//                     Listings.findByIdAndUpdate(req.body.id, 
//                         { $set: { additionalPhotos: addAditionalImages } }, { new: true }, (err, doc) => {
//                         if (err) return res.json(handleErr(err))
//                         else {
//                             return res.json(handleSuccess(doc))
//                         }
//                     })
//                 }
//                 else {
//                     return res.json(handleErr('Up to 5 images are required'))
//                 }
//             }
//             else {
//                 return res.json(handleErr('Files can not be null'))
//             }
//         }
//     });
// });