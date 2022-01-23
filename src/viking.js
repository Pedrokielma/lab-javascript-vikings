// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// let bob = new Viking("Bob", 60, 100);
// bob.receiveDamage(3);
// bob.receiveDamage(70);
// console.log(bob);

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    
  }
  addViking(obj) {
    this.vikingArmy.push(obj);
  }
  addSaxon(obj) {
    this.saxonArmy.push(obj);
  }
  variables(){

  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let selectSaxon = this.saxonArmy[randomSaxon];
    let selectViking = this.vikingArmy[randomViking];
    let injuredSaxon = selectSaxon.receiveDamage(selectViking.strength);
    if (randomSaxon.health < 0) {
      this.vikingArmy.splice(randomSaxon, 1);
    }
    return injuredSaxon;
  }
  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let selectSaxon = this.saxonArmy[randomSaxon];
    let selectViking = this.vikingArmy[randomViking];
    let injuredViking = selectViking.receiveDamage(selectSaxon.strength);
    if (randomViking.health < 0) {
      this.saxonArmy.splice(randomViking, 1);
    }
    return injuredViking;
  }
}



// let jeff = new Viking("jeff", 3, 70)
// let bob = new Saxon (60, 100);
// let war = new War()
// war.addViking(jeff)
// war.addSaxon(bob)
// war.vikingAttack()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = { Soldier, Viking, Saxon, War };
}
