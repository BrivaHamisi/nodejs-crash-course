require('dotenv').config(); //Load environment variables from a .env file into process.env
let http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT || 3005;
const ENV = process.env.NODE_ENV || 'developer';

// In-memory data store
let movies = [
  { id: 1, title: "Titanic", year: 1997, genre: "Romance", rating: 7.9 },
  { id: 2, title: "Avatar", year: 2009, genre: "Sci-Fi", rating: 7.8 },
  { id: 3, title: "Shrek", year: 2001, genre: "Animation", rating: 7.9 },
  { id: 4, title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
];

/*
 *  REST API Routes
 *  - GET: http://localhost:3001/api/movies (get all)
 *  - GET: http://localhost:3001/api/movies/{id} (get by ID)
 *  - GET: http://localhost:3001/api/movies?year=1997 (filter by query)
 *  - POST: http://localhost:3001/api/movies (create)
 *  - PUT: http://localhost:3001/api/movies (update)
 *  - DELETE: http://localhost:3001/api/movies (delete)
 */


http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}/`; // Construct the base URL from the request headers
    const { pathname} = new URL(req.url, baseURL); // Parse the request URL using the WHATWG URL API

    console.log("Request", req.method, pathname);
}).listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}/ in ${ENV} mode`); //Prints a message to the console indicating that the server is running
}); //The server listens on port 3000 and IP address
// This is a simple HTTP server that responds with "Hello World" to any request.    
// The server listens on port 3000 and responds with a 200 OK status code and a plain text content type.    
