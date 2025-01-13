// Create Web server
// Create a Web server that listens for incoming requests on port 3000, and responds with the contents of the comments.json file.
// The comments.json file contains a list of comments that can be displayed on a Web page.
// The server should respond to requests for the comments.json file by reading the file and returning the contents to the client.
// The server should respond to all other requests by returning a "Not Found" error message.

// Load the http module
var http = require('http');
var fs = require('fs');

// Create a server
var server = http.createServer(function (request, response) {
  if (request.url === '/comments.json') {
    fs.readFile('comments.json', function (error, data) {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

// Listen on port 3000
server.listen(3000);

// Print feedback to the console
console.log('Server listening on port 3000');