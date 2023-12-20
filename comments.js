// Create web server application
var express = require('express');
var app = express();

// Import the 'comments' module
var comments = require('./comments.js');

// Create a route for getting all comments
app.get('/comments', function(req, res) {
    res.json(comments.get());
});

// Create a route for getting a single comment
app.get('/comments/:id', function(req, res) {
    res.json(comments.get(req.params.id));
});

// Start the server on port 8080
app.listen(8080);

// Notify the user that the server is ready
console.log('Server is ready!');