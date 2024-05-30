const express = require('express');


const { createServer } = require('node:http')
const app = express();

const server = createServer(app);
app.get('/' , function(req, res){

    req.send('Hello World');

})
server.listen(3000 , ()=>{
    console.log("server is running at http://localhost:3000")
})