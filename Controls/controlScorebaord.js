//Dependencies
const express = require("express");
const router = express();
const mongoose = require("mongoose");

//Configuration
require("dotenv").config();

//Models
const scoreboard = require("../Models/modelScoreboard");

//Database (MongoDB Atlas)
const URI = process.env.MONGO_URI
mongoose.connect(URI)

//Root route
router.get(`/`, async (req, res) => {
    // res.send("Scoreboard root route accessed.")
    try {
        const data = await scoreboard.find();
        res.send({
            data: data
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})




module.exports = router;