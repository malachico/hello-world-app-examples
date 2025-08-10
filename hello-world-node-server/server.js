const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(`Received request for ${request.url}`);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello, World!</h1><p>This is a simple Node.js server example.</p>');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});