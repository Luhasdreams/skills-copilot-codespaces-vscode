// Create web server
// var http = require('http');
var express = require('express');
var app = express();
var router = express.Router();
var comments = require('./comments.json');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// });

// server.listen(3000, '