//Dependencies
const express = require('Express');
const server = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middleware
server.use(bodyParser.urlencoded({ extended: true }));

//Landing route
server.get(`/`, (req, res) => {
    res.send("Landing route accessed. /scoreboard for top 10 scores and their names")
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