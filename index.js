//Dependencies
const express = require('Express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Configuration
require("dotenv").config();
const port = process.env.PORT;

//Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

//Landing route
server.get(`/`, cors(), (req, res, next) => {
    res.redirect(`/scoreboard`);
})

//Controller Indices
const scoreboard = require('./Controls/controlScorebaord');
server.use(`/scoreboard`, scoreboard);

//Database Error Handling
mongoose.connection.on(`error`, (error) => console.error(error));
mongoose.connection.once(`open`, () => console.log("MongoDB connected"));

//Listener
server.listen(port, () => {
    console.log(`Express.js is online and running on port: ${port}.`)
})