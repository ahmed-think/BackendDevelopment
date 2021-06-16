const express = require('express');
const router = express.Router();
const questions = require('../schema/Questions')
const strands = require('../schema/strands')
router.post('/addcapability', (req, res) => {
    let data = {
        text: req.body.text,
        strand:req.body.strandid
    }
    questions.create(data, (err, doc) => {
        if (err) console.log(err);
        else {
            strands.findByIdAndUpdate(req.body.strandid, { $push: { question: doc._id } }).exec((er, dc) => {
                if (er) console.log(er);
                else res.send(doc)
            })

        };
    })
})

router.post('/disablequestion', async (req, res) => {
    questions.findByIdAndUpdate(req.body.id, { enabled: req.body.enabled }, { new: true }).exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc);
        };
    });
});


router.get('/showenable', (req, res) => {
    questions.find({ enabled: true }).exec((err, doc) => {
        if (err) console.log(err);
        else res.send(doc)
    })
})

router.post('/questionshow', (req, res) => {
    questions.find().exec((err, doc) => {
        if (err) console.log(err);
        else {
            res.send(doc)
        }
    })
})


module.exports = router