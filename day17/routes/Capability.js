const express = require('express');
const router = express.Router();
const capabilities = require('../schema/Capability')
const strands = require('../schema/strands')
router.post('/addcapability', (req, res) => {
    let data = {
        name: req.body.name,
        remarks:req.body.remarks,
        strand:req.body.strandid
    }
    capabilities.create(data, (err, doc) => {
        if (err) console.log(err);
        else {
            strands.findByIdAndUpdate(req.body.strandid, { $push: { capabilities: doc._id } }).exec((er, dc) => {
                if (er) console.log(er);
                else res.send(doc)
            })

        };
    })
})

router.post('/disablecapability', async (req, res) => {
    capabilities.findByIdAndUpdate(req.body.id, { status: req.body.status }, { new: true }).exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc);
        };
    });
});


router.get('/showenable', (req, res) => {
    capabilities.find({ status: true }).exec((err, doc) => {
        if (err) console.log(err);
        else res.send(doc)
    })
})

router.post('/capabilityshow', (req, res) => {
    capabilities.find().exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc)
        }
    })
})


module.exports = router