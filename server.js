// configure environment variables in .env
require('dotenv').config()

// logging client request (POST, GET, etc..)
var logger = require("morgan");

// express server
var express = require("express");

// Middle-ware to test client requests
var bodyParser = require('body-parser')


// Initialize Express
var app = express();

// parse application/json
app.use(bodyParser.json())

// Use morgan logger for logging requests
app.use(logger("dev"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Main route
app.get("/", function(req, res) {
    res.send("WASSUP HACKUCI!!");
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});