var Pet = function (name, age) {
    this.name = name;
    this.hunger = 500;
    this.age = age;
    this.level = 1;
    this.health = 20;
    this.current_health = 20;
    this.leveled = false;
    this.ap = Math.floor(Math.random() * 3) + 3;
    this.dp = Math.floor(Math.random() * 3) + 1;

    this.talk = function() {
      console.log("Hello my name is " + this.name);
      console.log("My hunger is:", this.hunger);
      console.log("My health is:", this.current_health, "/", this.health);
      console.log("My age is:", this.age);
      console.log("My level is:", this.level);
      console.log("My stats are:", this.ap, "attack and", this.dp, "defense.");
    }

    this.feed = function() {
      this.hunger -= 10 * (this.level/2);
    }

    this.checkLevel = function() {
      if(this.hunger <= 0) {
        this.leveled = true;
        this.hasLeveledUp();
      }
    }

    this.hasLeveledUp = function() {
      if (this.leveled) {
        this.level ++;
        this.hunger = this.level * 1000;
        this.ap += Math.floor(Math.random() * 3) + 3;
        this.dp += Math.floor(Math.random() * 3) + 1;
        this.health += Math.floor(Math.random() * 2) + 4;
        this.current_health = this.health;
        this.leveled = false;
        if (this.level % 10 == 0){
          this.stats();
        }
      }
    }

    this.stats = function(){
      console.log("\n" + this.name + " has leveled up to level", this.level);
      console.log("My stats increased to", this.ap, "attack and", this.dp, "defense.");
      console.log("My health increased to", this.health);
    }

    this.starve = function() {
      this.hunger ++;
    }

    this.attack = function(pet) {
      dmg = (Math.floor(Math.random() * 2) + this.ap) - 1;
      name = this.name
      pet.defend(dmg, name);
    }

    this.defend = function(dmg, petName) {
      def = (Math.floor(Math.random() * 2) + this.dp) - 1;
      if (dmg - def > 0) {
        this.current_health -= (dmg - def);
        console.log(petName + " has attacked " + this.name + " for " + (dmg-def) + " dmg.");
      }else{
        console.log(petName + " has dealt no dmg to " + this.name);
      }
    }

    this.heal = function(num){
      this.current_health += num;
      console.log(this.name + " has healed for " + num + " hp.");
    }

    this.checkDeath = function(){
      if (this.current_health <= 0){
        console.log(this.name + " has perished.");
        return true;
      }
      return false;
    }
    return this;
  };

  module.exports = Pet;
