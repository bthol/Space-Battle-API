//Dependencies
const express = require("express");
const router = express();
const mongoose = require("mongoose");

//Configuration
require("dotenv").config();

//Models
const modelScoreboard = require("../Models/modelScoreboard");

//Database (MongoDB Atlas)
const URI = process.env.MONGO_URI
mongoose.connect(URI)

router.get(`/`, (req, res) => {
    res.send("Control route accessed.")
})

module.exports = router;