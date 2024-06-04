const http = require('http');
const express = require('express');
const app = express();
const  socket  = require("socket.io");


const server = http.createServer(app);
const io = socket(server);
io.on("connection", (socket) => {
    socket.emit("hello", "world");
});
// app.get('/', function (req, res) {

//     req.send('Hello World');

// })
server.listen(5000, () => {
    console.log("server is running at http://localhost:5000")
})