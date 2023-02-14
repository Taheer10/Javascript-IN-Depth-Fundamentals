// Getters and setters are special properties that we can use to get data from a class and
// to set data fields on the class.

// Getters and setters are computed properties. So, they
// are more like properties than they are like functions.
//  We call them accessors

// These accessors start with the get and set keywords.
//Setter must have one parameter(takes one argument)
//Getter does not take any arguments (have any parameters)

class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
  }
  // set firstName(firstname) {
  //   if (firstname.startsWith("M")) {
  //     this.#firstname = firstname;
  //   } else {
  //     this.#firstname = "M" + firstname;
  //   }
  // }
}

let p = new Person("Ben", "Affleck");

p.firstName = "Chirs"; //Setting Value
p.lastName = "Evans";

console.log(p.firstName, p.lastName);
