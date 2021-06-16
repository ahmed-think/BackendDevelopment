const express = require('express');
const router = express.Router();
const dimensions = require('../schema/dimensions')
const strands = require('../schema/strands')
router.post('/addstrand', (req, res) => {
    let data = {
        name: req.body.name,
        weightage: req.body.weightage,
        dimension: req.body.dimension
    }
    strands.create(data, (err, doc) => {
        if (err) console.log(err);
        else {
            dimensions.findByIdAndUpdate(req.body.dimension, { $push: { strand: doc._id } }).exec((er, dc) => {
                if (er) console.log(er);
                else res.send(doc)
            })

        };
    })
})

router.post('/disable', async (req, res) => {
    strands.findByIdAndUpdate(req.body.id, { status: req.body.status }, { new: true }).exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc);
        };
    });
});


router.get('/showenable', (req, res) => {
    strands.find({ status: true }).exec((err, doc) => {
        if (err) console.log(err);
        else res.send(doc)
    })
})
router.get('/showdisable', (req, res) => {
    strands.find({ status: false }).exec((err, doc) => {
        if (err) console.log(err);
        else res.send(doc)
    })
})

router.post('/strandshow', (req, res) => {
    strands.find().exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc)
        }
    })
})


module.exports = router