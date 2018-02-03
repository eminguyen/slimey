// Import routes and give the server access to them.
var routes = require("./routes/api-routes.js");

// logging client request (POST, GET, etc..)
var logger = require("morgan");

// express server
var express = require("express");

// Middle-ware to test client requests
var bodyParser = require('body-parser');

// Initialize Express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Use imported routes
app.use(routes);

// parse application/json
app.use(bodyParser.json())

// Use morgan logger for logging requests
app.use(logger("dev"));


// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});