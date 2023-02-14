// Employee tracking app
// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
// constructor.
// 2. Create two or more people with values for their first names, last names, and
// the number of years they've worked at the company. Add the people into an
// array.
// 3. Set up a prototype to return the details of the person's first and last names
// and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
// some text to make the output a full sentence

class Employees {
  constructor(firstName, lastName, noOfYears) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.noOfYears = noOfYears;
  }
}

let people = [];

let p = new Employees("Wonder", "Woman", 5);
let p2 = new Employees("scarlet", "Johanson", 9);

people.push(p, p2);
// people.push(p2);
// console.log(people);

Employees.prototype.detail = function () {
  return `${this.firstName} ${this.lastName} has worked for ${this.noOfYears} Years`;
};

console.log(p.detail());
console.log(p2.detail());
people.forEach((p) =>
  console.log(
    `The employees details is ${p.firstName}${p.lastName}
    and has been working for ${p.noOfYears} Years
    `
  )
);
