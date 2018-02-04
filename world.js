var Pet = require("./pet-test.js");

var good_buddy = new Pet("Good Buddy", 1);
var bad_buddy = new Pet("Bad Buddy", 1);

good_buddy.talk();
bad_buddy.talk();

while (good_buddy.level < 100){
  good_buddy.feed();
  good_buddy.starve();
  good_buddy.checkLevel();

  bad_buddy.feed();
  bad_buddy.starve();
  bad_buddy.checkLevel();
}

console.log("\n------- BATTLE HAS STARTED ------\n");
while (true){
  good_buddy.attack(bad_buddy);
  bad_buddy.attack(good_buddy);
  if(bad_buddy.checkDeath() || good_buddy.checkDeath()){
    break;
  }
  console.log();
  good_buddy.heal(Math.floor(Math.random() * good_buddy.level/3) + good_buddy.level);
  bad_buddy.heal(Math.floor(Math.random() * bad_buddy.level/3) + bad_buddy.level);
  console.log();
  console.log(good_buddy.name + " now has health " + good_buddy.current_health);
  console.log(bad_buddy.name + " now has health " + bad_buddy.current_health);
  console.log();
}
