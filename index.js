// let http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'}); //Set the response HTTP header with HTTP status and content type
//     res.end('Hello World\n'); //Send the response body "Hello World" and close the connection
// }).listen(3000, '127.0.0.1'); //The server listens on port 3000 and IP address
// console.log('Server running at http://127.0.0.1:3000/'); //Prints a message to the console indicating that the server is running
// This is a simple HTTP server that responds with "Hello World" to any request.    
// The server listens on port 3000 and responds with a 200 OK status code and a plain text content type.    



// Parsing URL
// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true); // Parse the request URL
//     const { pathname, query } = parsedUrl; // Destructure pathname and query from the parsed URL
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({ url: req.url, pathname, query })); // Respond with the pathname and query as JSON
// }).listen(3000);

// console.log('Server running at http://localhost:3000/'); // This server responds with the parsed pathname and query parameters as JSON.
// This server responds with "Hello World" and displays the request method and URL.


const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}/`; // Construct the base URL from the request headers
    const parsedUrl = new URL(req.url, baseURL); // Parse the request URL using the WHATWG URL API

    const params = Object.fromEntries(parsedUrl.searchParams.entries()); // Convert URLSearchParams to a plain object

    const queryParams = { ...params, rating: 8.7 }; // Add a new query parameter 'rating'

    const queryString = querystring.stringify(queryParams); // Convert the updated query parameters back to a query string

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ baseURL, pathname: parsedUrl.pathname, queryString })); // Respond with the pathname and updated query string as JSON
}).listen(3000);

console.log('Server running at http://localhost:3000/'); // This server responds with the updated query string including the new 'rating' parameter.
// This server responds with "Hello World" and displays the request method and URL.const queryString = require('querystring');          
