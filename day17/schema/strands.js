const mongoose = require('mongoose')
const strandSchema = new mongoose.Schema({
    weightage: { type: Number, required: true, min: 1, max: 5 },
    name: { type: String, required: true },
    enabled: { type: Boolean, default: true },
    dimension: { type: mongoose.Schema.Types.ObjectId, ref: "dimensions" },
    capabilities: [{ type: mongoose.Schema.Types.ObjectId, ref: "capabilities" }]
})
module.export = mongoose.model('strands', strandSchema) 