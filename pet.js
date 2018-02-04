//Create array of sockets
var SOCKET_LIST = {};
var PLAYER_LIST = {};

//Create a player object
function newPlayer (id) {
  this.id = id;
  this.hunger = 0;
  this.hungerfloat = 0;
  this.health = 0;
  this.starve = function() {
      this.hungerfloat += 0.01;
      this.hunger = Math.round(this.hungerfloat);
  };
};

module.exports = newPlayer;


//   socket.on('feed', function() {
//     player.hungerfloat--;
//   })

//   socket.on('disconnect', function() {
//     delete SOCKET_LIST[socket.id];
//     delete PLAYER_LIST[socket.id];
//   })

// });

// //On each interval
// setInterval(function(){
//   var pack = [];
//   for(var i in PLAYER_LIST) {
//     var player = PLAYER_LIST[i];
//     console.log(Math.round(player.hunger));
//     player.starve();
//     pack.push({
//       hunger:player.hunger
//     })
//   }
//   for(var i in SOCKET_LIST) {
//     var socket = SOCKET_LIST[i];
//   socket.emit('updateHunger', pack);
// }
// },1000/25);
