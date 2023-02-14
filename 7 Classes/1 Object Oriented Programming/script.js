// classes are a blueprint or template for object creation
// Classes enable object-oriented programming

//  OOP is a very important programming
// paradigm wherein code is structured in objects, leading to more maintainable and
// reusable code

//Class and Objects

// Classes in JavaScript encapsulate data and functions that are part of that class

//Way of declaring classes and objects
class ClassName {
  value;
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.value = 20;
  }
}
let obj = new ClassName("arg1", "arg2");
// console.log(obj);

// The properties of the class can be recognized by the
// this keyword in front of them. The this keyword refers to the object it belongs to,
// so it is the first property of the instance of ClassName.

// t classes are just some special function beneath the surface.

// We could create the object with a special function like this:
// function Dog(dogName, weight, color, breed) {
//  this.dogName = dogName;
//  this.weight = weight;
//  this.color = color;
//  this.breed = breed;
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");

//Using Class
class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog);


