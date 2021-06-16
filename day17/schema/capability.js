const mongoose = require('mongoose')
const capabilitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    enabled: { type: Boolean, default: true },
    remarks:
        [{
            text: String,
            level: { type: Number, required: true, min: 1, max: 5 }
        }]
})
module.export = mongoose.model('capabilities', capabilitySchema)