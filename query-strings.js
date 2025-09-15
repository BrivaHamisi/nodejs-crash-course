const http = require('http');
const url = require('url');
const queryString = require('querystring');

http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}/`; // Construct the base URL from the request headers
    const parsedUrl = new URL(req.url, baseURL); // Parse the request URL using the WHATWG URL API

    const params = Object.fromEntries(parsedUrl.searchParams.entries()); // Convert URLSearchParams to a plain object

    const queryParams = { ...params, rating: 8.7 }; // Add a new query parameter 'rating'

    const queryString = queryString.stringify(queryParams); // Convert the updated query parameters back to a query string

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ baseURL, pathname: parsedUrl.pathname, queryString })); // Respond with the pathname and updated query string as JSON
}).listen(3000);

console.log('Server running at http://localhost:3000/'); // This server responds with the updated query string including the new 'rating' parameter.
// This server responds with "Hello World" and displays the request method and URL.const queryString = require('querystring');          
