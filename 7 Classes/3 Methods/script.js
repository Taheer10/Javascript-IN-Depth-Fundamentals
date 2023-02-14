// Functions on a class are called methods.
//  When defining these methods, we don't use the function keyword.

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there! I'm", this.firstname);
//   }
// }

// let p = new Person("Robert", "Pim");
// p.greet();

//Properties of class within class is accessed using this

// class House {
//   amount = 5000;
//   constructor(storey, address) {
//     this.storey = storey;
//     this.address = address;
//   }

//   detail() {
//     console.log(`This house is on sale on amount ${this.amount}`);
//   }
// }

// let h = new House(5, "NY");
// h.detail();

class House {
  constructor(storey, address) {
    this.storey = storey;
    this.address = address;
  }

  detail(amount) {
    console.log(`This house is on sale on amount ${amount}`);
  }
}

let h = new House();
// h.detail(50000);

// Practice exercise 7.2
// Get your friend's full name:
// 1. Using the Person class from Practice exercise 7.1, add a method called
// fullname, which returns the concatenated value of firstname and lastname
// when invoked.
// 2. Create values for person1 and person2 using two friends' first and last names.
// 3. Using the fullname method within the class, return the full name of one or
// both people.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullname() {
     return `Concatenated name is ${this.firstName}  ${this.lastName}`;
  }
}
let p0 = new Person("John","snow");
let p = new Person("Rob","Stark");
console.log(p0,p);
console.log(p.fullname());
console.log(p0.fullname());












