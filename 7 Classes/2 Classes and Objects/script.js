// classes are essentially blueprints
// for object creation.

// Constructors

// The constructor method is a special method that we use to initialize objects with
// our class blueprint. There can only be one constructor in a class. This constructor
// contains properties that will be set when initiating the class.

class People {
  //address
  // name;age;--This properties are defined in here and
  //this.name,this.age,this.address is accessed from the people property
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.address = "btm";
  }
}

//Way to create a Object
let obj = new People("admin", 10);

// The new word is what tells JavaScript to look for the special constructor function in
// the Person class and create a new object.

// The constructor gets called and returns an
// instance of the person object with the specified properties. This object gets stored in
// the obj variable.

// console.log(obj.name);
// class Abc{

// }

// let a = new Abc("admin", 10);
// console.log(a.name);//Undefined




// Practice exercise 7.1
// Take the following steps to create a person class, and print instances of friends' 
// names:
// 1. Create a class for Person including the constructor for firstname and 
// lastname.
// 2. Create a variable and assign a value of the new Person object using your 
// friend's first and last names.
// 3. Now add a second variable with another friend's name using their first name 
// and last name.
// 4. Output both friends into the console with a greeting of hello.




class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let value = new Person("Robert", "Downey Jr");
let value2 = new Person("Henry", "Calvin");
// console.log(value);

console.log(`Hello ${value.firstName} ${value.lastName}`);
console.log(`Hello ${value2.firstName} ${value2.lastName}`);






















