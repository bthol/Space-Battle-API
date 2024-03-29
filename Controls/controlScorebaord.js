//Dependencies
const express = require("express");
const router = express();
const mongoose = require("mongoose");
const cors = require('cors');

//Configuration
require("dotenv").config();

//Middleware
router.use(cors());

//Database (MongoDB Atlas)
const URI = process.env.MONGO_URI;
mongoose.connect(URI);

//Models
const scoreboard = require("../Models/modelScoreboard");

//Root route
router.get(`/`,  async (req, res, next) => {
    // res.send("Scoreboard root route accessed.")
    try {
        const data = await scoreboard.find();
        // res.render('../Views/dataList.ejs', {data: data})
        res.send({
            data: data
        })
    } catch (err) {
        res.send({
            error: err
        })
    }
})

//Read route 1
router.get(`/id::id`, async (req, res) => {
    // res.send("read route accessed.")
    try {
        const datum = await scoreboard.findById(req.params.id)
        if (!datum) {throw new Error("No datum by that ID")}
        res.render('../Views/datum.ejs', {datum: datum})
    } catch (err) {
        res.send({
            error: err
        })
    }
})

//Read route 2
router.get(`/rank::id`, async (req, res, next) => {
    // res.send("read route accessed.")
    try {
        const datum = await scoreboard.findOne({"userRank": `${req.params.id}`});
        if (!datum) {throw new Error("No datum by that rank")}
        // res.send({
        //     datum: datum
        // })
        // res.render('../Views/datum.ejs', {datum: datum})
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

//Update route 1
router.patch(`/id::id`, async (req, res) => {
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

//Update route 2
router.patch(`/rank::id`, async (req, res, next) => {
    // res.send("update route accessed.")
    try {
        const datum = await scoreboard.findOneAndUpdate({"list": `${req.params.id}`}, req.body, {new: true})
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
router.delete(`/id::id`, async (req, res) => {
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