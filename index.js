//Importing the Express FrameWork
const express = require('express');

//Creating an instance of the Experss application
const app = express();

//Defining port number for server to listen pon
const port = 3000;

// Middleware: Use the built-in JSON parser middleware to parse incoming JSON requests
app.use(express.json());

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // When a request is received, send back the message 'Hello from index.js!'
    res.send('Hello from index.js!');
});
  
// Start the server and listen on the specified port
app.listen(port, () => {
    // Once the server is started, log a message indicating where it's running
    console.log(`Server running at http://localhost:${port}/`);
});
  