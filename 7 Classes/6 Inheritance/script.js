// classes can have
// child classes that inherit the properties and methods from the parent class

class Animal {
  constructor(speed, food) {
    this.speed = speed;
    this.food = food;
  }

  move() {
    console.log(`Moves at the speed of ${this.speed}`);
  }

  eat() {
    console.log(`Eat the food i.e ${this.food}`);
  }
}

class Dog extends Animal {
  constructor(color, speed, food, bark) {
    super(color, speed, food);
    this.bark = bark;
    this.color = color;
  }

  isLoyal() {
    console.log("the most loyan animal");
  }
}

// With the extends keyword we specify that a certain class is the child of another class.
// The super word in the constructor is calling the constructor from the parent
//  Calling super() is not optional, you must do
// it when you are in a class that is inheriting from another class, else you will get a
// ReferenceError.

let ani = new Dog(150, "Pedigree", true, "Black");

// console.log(ani);

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;

    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
  }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);

motor.accelerate(50);
motor.move();