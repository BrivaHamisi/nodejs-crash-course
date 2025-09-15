const http = require('http');

http.createServer((req, res) => {
    const { method, url } = req; // Destructure method and url from the request object
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello World</h1><p>Request Method: ${method}</p><p>Request URL: ${url}</p>`);
}).listen(3000);

console.log('Server running at http://localhost:3000/');    // This server responds with "Hello World" and displays the request method and URL.