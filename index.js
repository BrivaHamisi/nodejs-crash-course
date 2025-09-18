require('dotenv').config(); //Load environment variables from a .env file into process.env
let http = require('http');

const PORT = process.env.PORT || 3005;
const ENV = process.env.NODE_ENV || 'developer';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); //Set the response HTTP header with HTTP status and content type
    res.end('Hello World\n'); //Send the response body "Hello World" and close the connection
}).listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}/ in ${ENV} mode`); //Prints a message to the console indicating that the server is running
}); //The server listens on port 3000 and IP address
// This is a simple HTTP server that responds with "Hello World" to any request.    
// The server listens on port 3000 and responds with a 200 OK status code and a plain text content type.    
