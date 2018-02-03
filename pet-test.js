function Pet (name, hunger, health, age) {
  this.name = name;
  this.hunger = hunger;
  this.health = health;
  this.age = age;
  this.talk = function() {
    console.log("Hello my name is " + this.name);
    console.log("My hunger is:", this.hunger);
    console.log("My health is:", this.health);
    console.log("My age is:", this.age);
  }
}

var buddy = new Pet("Buddy", 0, 100, 1);
buddy.talk();
