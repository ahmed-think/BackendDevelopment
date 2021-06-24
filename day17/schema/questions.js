const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    text: String,
    strand: { type: mongoose.Schema.Types.ObjectId, ref: 'strands' },
    enabled: { type: Boolean, default: true }
})
module.exports = mongoose.model('questions', questionSchema)