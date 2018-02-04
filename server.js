// Import routes and give the server access to them.
var sendGridRoutes = require("./routes/api-routes.js");

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

// import slime object
var slime = require("./slime.js");

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

// Initialize Express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// Use imported routes
app.use(sendGridRoutes);

// parse application/json
app.use(bodyParser.json());

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
  // increment player id when new connection to socket is established
  PLAYER_ID++;

  // create new player
  var newPlayer = new slime(PLAYER_ID);
  
  // push player into player list
  PLAYER_LIST.push(newPlayer);

  console.log(PLAYER_LIST);

  // emit news to server on connection
  socket.emit('generate slime', newPlayer);
  socket.emit('stats', newPlayer);

  // when the server recieves a request to feed the slime
  socket.on('feed', function() {
    newPlayer.feed();
    socket.emit('stats', newPlayer);
  });
  
  socket.on('level', function() {
    newPlayer.level();
    socket.emit('stats', newPlayer);
  });

  // send mail to client
  socket.on('send mail', function() {
    socket.emit('send mail', newPlayer);
  });

  // slime gets hungry every 3 second
  setInterval(function(){
    newPlayer.starve();
    // if(newPlayer.hunger === 50) {
    //   socket.emit('send mail')
    // }
    socket.emit('stats', newPlayer);
  },1000);

  // tells the server when the slime is rendered
  socket.on('render', function(data) {
    console.log(data)
  });
});