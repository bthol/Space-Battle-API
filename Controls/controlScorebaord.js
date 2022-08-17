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

//Read route
router.get(`/:id`, async (req, res) => {
    // res.send("read route accessed.")
    try {
        const datum = await scoreboard.findById(req.params.id)
        if (!datum) {throw new Error("No datum by that ID")}
        res.send({
            datum: datum
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

//Create route
router.post(`/`, async (req, res) => {
    // res.send("create route accessed.")
    try {
        const entry = await scoreboard.create(req.body);
        res.send({
            entry: entry
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

//Update route
router.patch(`/:id`, async (req, res) => {
    // res.send("update route accessed.")
    try {
        const datum = await scoreboard.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send({
            datum: datum
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

//Delete route
router.delete(`/:id`, async (req, res) => {
    // res.send("delete route accessed.")
    try {
        const datum = await scoreboard.findByIdAndDelete(req.params.id);
        res.send({
            deleted: datum
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

module.exports = router;