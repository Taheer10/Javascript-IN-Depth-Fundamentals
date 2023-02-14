// A prototype is the mechanism in JavaScript that makes it possible to have objects.
// When nothing is specified when creating a class, the objects inherit from the
// Object.prototype prototype.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}

Person.prototype.greetings = function () {
  console.log(`Hello ${this.firstname}`);
};

Person.prototype.address = "Toronto";

let p = new Person("Elizabeth", "Olsen");
let p2 = new Person("robert", "dow");

// p.greet();
// p.greetings();
// console.log(p.address);
// p2.greetings();

// So the methods and properties defined via prototype are really as if they were
// defined in the class.

// Practice exercise 7.3
// Create a class that contains properties for different animal species and the sound that
// each species makes, and create two (or more) animals:
// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.

class Animal {
  constructor(color, weight, speed) {
    this.color = color;
    this.weight = weight;
    this.speed = speed;
  }
}

class Tiger extends Animal {
  constructor(color, weight, speed, name, sound, danger) {
    super(color, weight, speed, sound);
    this.name = name;
    this.sound = sound;
    this.danger = danger;
  }

  getName() {
    console.log(`Name of animal is ${this.name}`);
  }

  getSound() {
    console.log(`Sound of animal is ${this.sound}`);
  }
}

Tiger.prototype.hunt = "Fast";
Animal.prototype.growth = function (time) {
  console.log(`Animal grows faster at ${time} days`);
};

let ani = new Tiger(
  "Yellow with Black Stripes",
  200,
  50,
  "Tiger",
  "scary",
  true
);

console.log(ani);
ani.growth(730);
console.log(ani.hunt);
