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

    category: [{
        type: String,
        required: true
    }],

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps: true});

module.exports = mongoose.model('Note', noteSchema); //notes