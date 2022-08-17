const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    userScore: {
        type: Number,
        required: true
    },
}, {timestamps: false});

const modelScoreboard = mongoose.model('modelScoreboard', schema);

module.exports = modelScoreboard;