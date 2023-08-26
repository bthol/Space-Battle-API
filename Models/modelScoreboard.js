const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    userName: {
        type: String,
        required: true
    },
    userScore: {
        type: Number,
        required: true
    },
    userRank: {
        type: Number,
        required: true
    },
}, {timestamps: false});

const scoreboard = mongoose.model('scoreboard', schema);

module.exports = scoreboard;