const express = require('express');
const app = express();

app.get('/' , function(req, res){

    req.send('Hello World');

})