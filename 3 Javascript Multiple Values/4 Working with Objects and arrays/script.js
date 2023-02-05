//Working with Objects and Arrays

//Objects in Objects
let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
// console.log(company.address.number);
// company.address.zipcode = "33117";
// console.log(company.address.zipcode);

// Arrays in objects

company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

let activity = company.activities[1];
// console.log(activity);

//Object in arrays

let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];
let streetName = addresses[0].street;
// console.log(streetName);

// Objects in arrays in objects
company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};

//Excercise
//  1. Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

let people = {
  friends: [],
};

let fname = "admin";
let lname = "test";
let id = 10;

people.friends = fname.concat(lname).concat(id);
console.log(people.friends);
