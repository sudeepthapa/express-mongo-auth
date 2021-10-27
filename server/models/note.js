const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    isDone: {
        type: Boolean,
        default: false
    },

});

module.exports = mongoose.model('Note', noteSchema); //notes