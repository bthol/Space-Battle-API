//Dependencies
import express, { json } from 'express.js';
const server = express();
import { connection } from 'mongoose';
import { urlencoded } from 'body-parser';
import cors from 'cors';

//Configuration
require("dotenv").config();
const port = process.env.PORT || 3000;

//Middleware
server.set('view engine', 'ejs');
server.use(urlencoded({ extended: false }));
server.use(json());
server.use(cors());

//Landing route
server.get(`/`, cors(), (req, res, next) => {
    res.redirect(`/scoreboard`);
})

//Controller Indices
import scoreboard from './Controls/controlScorebaord';
server.use(`/scoreboard`, scoreboard);

//Database Error Handling
connection.on(`error`, (error) => console.error(error));
connection.once(`open`, () => console.log("MongoDB connected"));

//Listener
server.listen(port, () => {
    console.log(`Express.js is online and running on port: ${port}.`)
})
