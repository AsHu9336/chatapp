const http = require('http');
const express = require('express');
const app = express();
const  socket  = require("socket.io");


const server = http.createServer(app);
const io = socket(server);
io.on("connection", (socket) => {

    console.log("Socket Connected")
    socket.emit("hello", "world");

    socket.on("disconnected" , ()=>{
        console.log("user left the chat");
    })
});
// app.get('/', function (req, res) {

//     req.send('Hello World');

// })
server.listen(5000, () => {
    console.log("server is running at http://localhost:5000")
})