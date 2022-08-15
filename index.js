const express = require('Express');
const server = express();
const port = 3000;


//Landing route
server.get(`/`, (req, res) => {
    res.send("Landing route accessed.")
})

//Database Error Handling
// mongoose.connection.on(`error`, (error) => console.error(error));
// mongoose.connection.once(`open`, () => console.log("MongoDB connected"));

server.listen(port, () => {
    console.log(`Express.js is online and running on port: ${port}.`)
})