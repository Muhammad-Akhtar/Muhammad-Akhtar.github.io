// Express library helps to make a web server in node environment.
    
var express = require('express');
var app = express();

var port = 8001;

// below statement is to execute index.html by default
// If your html name is different then put your html name (__dirname + '/demo.html')
app.use(express.static(__dirname + '/'));

// start a serve on given port
app.listen(port);

console.log("Server started at: " + port);