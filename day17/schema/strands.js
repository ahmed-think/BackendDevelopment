const mongoose = require('mongoose')
const strandSchema = new mongoose.Schema({
    weightage: { type: Number, required: true,  },
    name: { type: String, required: true },
    enabled: { type: Boolean, default: true },
    dimension: { type: mongoose.Schema.Types.ObjectId, ref: "dimensions" },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'questions' },
    capabilities: [{ type: mongoose.Schema.Types.ObjectId, ref: "capabilities" }],
})
module.export = mongoose.model('strands', strandSchema) 