let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
// This is a simple HTTP server that responds with "Hello World" to any request.    
// The server listens on port 3000 and responds with a 200 OK status code and a plain text content type.    