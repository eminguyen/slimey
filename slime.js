//Create a slime object
function slime (id) {
  this.id = id;
  this.hunger = 0;
  this.health = 100;
  this.starve = function() {
    this.hunger++;
  };
  this.feed = function() {
    this.hunger--;
  }
};

// export to server.js to enable slime creation on the server
module.exports = slime;
