// Parsing URL
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // Parse the request URL
    const { pathname, query } = parsedUrl; // Destructure pathname and query from the parsed URL
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ url: req.url, pathname, query })); // Respond with the pathname and query as JSON
}).listen(3000);

console.log('Server running at http://localhost:3000/'); // This server responds with the parsed pathname and query parameters as JSON.
// This server responds with "Hello World" and displays the request method and URL.