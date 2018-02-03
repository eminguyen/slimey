// logging client request (POST, GET, etc..)
var logger = require("morgan");

// express server
var express = require("express");

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));

var serv = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

//Start server on port 2000
serv.listen(process.env.PORT || 2000, function() {
  console.log("App running on port 2000!");
});

//Create array of sockets
var SOCKET_LIST = {};
var PLAYER_LIST = {};

//Create a player object
var Player = function(id) {
  var self = {
    id:id,
    hunger:0,
    hungerfloat:0,
    health:0
  }
  self.starve = function() {
    self.hungerfloat += 0.01;
    self.hunger = Math.round(self.hungerfloat);
  }
  return self;
}

//When io is called, a new socket will be made with a random ID
var io = require('socket.io') (serv, {});
io.sockets.on('connection', function(socket) {
  socket.id = Math.random();
  SOCKET_LIST[socket.id] = socket;

  var player = Player(socket.id);
  PLAYER_LIST[socket.id] = player;

  socket.on('feed', function() {
    player.hungerfloat--;
    player.hunger--;
  })

  socket.on('disconnect', function() {
    delete SOCKET_LIST[socket.id];
    delete PLAYER_LIST[socket.id];
  })

});

//On each interval
setInterval(function(){
  var pack = [];
  for(var i in PLAYER_LIST) {
    var player = PLAYER_LIST[i];
    console.log(Math.round(player.hunger));
    player.starve();
    pack.push({
      hunger:player.hunger
    })
  }
  for(var i in SOCKET_LIST) {
    var socket = SOCKET_LIST[i];
  socket.emit('updateHunger', pack);
}
},1000/25);
