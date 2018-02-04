// Import routes and give the server access to them.
var routes = require("./routes/api-routes.js");

// logging client request (POST, GET, etc..)
var logger = require("morgan");

// express server
var express = require("express");

// set up http server for socket request
var http = require('http');

// Middle-ware to test client requests
var bodyParser = require('body-parser');

// dependency for mongodb
var mongojs = require("mongojs");

// import player object
var player = require("./pet.js");

// path to join files
var path = require('path');

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "localhost:27017/data";
var collections = ["mailData", "userData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Insert mock data to test to see if database is set up properly
db.mailData.insert({"message":"test"});
db.userData.insert({"password":"test"});

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

// socket io configuration
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// listening for sockets and routes
server.listen(process.env.PORT || 3000, function() {
  console.log("App is running on port 3000!");
});

//Create array of sockets
var SOCKET_LIST = [];
var PLAYER_LIST = [];

// Keep track of unique player connections
var PLAYER_ID = 0;

io.on('connection', function (socket) {
  PLAYER_ID++;
  var newPlayer = new player(PLAYER_ID);
  PLAYER_LIST.push(newPlayer);

  console.log(PLAYER_LIST);
  // emit news to server on connection
  socket.emit('news', {message: 'hello'});

  // listen for events
  socket.on('render', function (data) {
    console.log(data);
    
  });
});

// // Listen on port 3000
// app.listen(process.env.PORT || 3000, function() {
//   console.log("App running on port 3000!");
// });