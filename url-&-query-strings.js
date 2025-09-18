// Getting the Request

// URL 
const http = require("http");

http
.createServer(function (req, res) {
const { method, url } = req;

res.writeHead(200, { "Content-Type": "text/html" });
res.end(`You did a ${method} request to ${url}`);
})
.listen(8080);

// Parsing URLs using the URL Module



const http = require("http");

const url = require('url');



http
.createServer(function (req, res) {
// Parse the URL
// `true` tells to parse the query string into an object
const parsedUrl = url.parse(req.url, true);

// Get parts of the URL
// `pathname` - the path without query string
// `query` - query string as an object const { pathname, query } = parsedUrl;

res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({
url: req.url,
pathname,
query
}));
})
.listen(8080);

// Using the Query Strings

const http = require("http");
const { URL } = require("url");
const querystring = require("querystring");

http
.createServer(function (req, res) {
// Parse the URL
const baseURL = `http://${req.headers.host}/`;
const parsedUrl = new URL(req.url, baseURL);

// Get query parameters as an object
const params = Object.fromEntries(parsedUrl.searchParams);

// Extend query parameters object
const queryParams = { ...params, rating: 8.7 };

// Convert query parameters object into query string
const queryString = querystring.stringify(queryParams);

res.writeHead(200, { "Content-Type": "application/json" });
res.end(
JSON.stringify({
baseURL,
pathname: parsedUrl.pathname,
queryString,
})
);
})
.listen(8080);