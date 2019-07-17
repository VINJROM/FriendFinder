// Pull required dependencies
var express = require('express');
var path = require('path');

// Configure Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Listening Port
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});