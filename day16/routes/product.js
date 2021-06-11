const express = require('express');
const products = require('../schema/Products');
const route = express.Router();
const brand = require('../schema/Brand')
const category = require('../schema/Category')
const multer = require("multer");
var upload = multer({ dest: __dirname + '/categoryimage/' }); //setting the default folder for multer

route.post('/addproduct', upload.single('image'), (req, res) => {
    let data = {
        name: req.body.name,
        description: req.body.description,
        producttype: req.body.producttype,
        price: req.body.price,
        instock: req.body.instock,
        dose: [req.body.dose],
        Picture: req.file.filename,
        brandname:req.body.bid,
        CategoryId:req.body.catid,

    }
    console.log('product->',data)
    products.create(data, (err, doc) => {
        if (err) console.log(err);
        else {
            console.log('document->',doc)
            category.findByIdAndUpdate(req.body.catid,{$push:{product:doc._id}},{new:true} ).exec((error,categoryData)=>{
                if(error) console.log(error);
                else {
                    brand.findByIdAndUpdate(req.body.bid,{$push:{product:doc._id}},{new:true}).exec((errr,brandData)=>{
                        if(errr) console.log(errr);
                        else {
                            let response = {
                                doc,
                                brandData,
                                categoryData
                            }
                            res.json({response})
                        }
                    })
                }
            })
        };
    })
})


route.post('/disable', async (req, res) => {
    products.findOneAndUpdate({ name: req.body.name }, { status: req.body.status }, { new: true }).exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc);
        };
    });
});

route.post('/update',(req,res)=>{
    products.findByIdAndUpdate(req.body.id,req.body,{new:true}).exec((err,doc)=>{
        if (err) console.log(err);
        else res.send(doc)
    })
})



route.get('/', (req, res) => {
    products.find({ status: true }).exec((err, doc) => {
        if (err) console.log(err);
        else res.send(doc)
    })
})


module.exports = route