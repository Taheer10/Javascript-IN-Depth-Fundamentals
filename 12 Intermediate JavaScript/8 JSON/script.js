// JSON stands for JavaScript Object Notation, which is nothing more than a data
// format.

// it's just a way of representing data
// using a similar format as JavaScript objects.
// It can also be easily converted to a
// JavaScript object.

// JSON is a standard used to communicate with APIs, including APIs that aren't
// written in JavaScript!

// Here is an
// example of JSON:
// {
//  "name" : "Malika",
//  "age" : 50,
//  "profession" : "programmer",
//  "languages" : ["JavaScript", "C#", "Python"],
//  "address" : {
//  "street" : "Some street",
//  "number" : 123,
//  "zipcode" : "3850AA",
//  "city" : "Utrecht",
//  "country" : "The Netherlands"
//  }
// }

let data = {
  name: "Malika",
  age: 50,
  profession: "programmer",
  languages: ["JavaScript", "C#", "Python"],
  address: {
    street: "Some street",
    number: 123,
    zipcode: "3850AA",
    city: "Utrecht",
    country: "The Netherlands",
  },
};

let datas = {
  companies: [
    {
      name: "JavaScript Code Dojo",
      addresses: [
        {
          street: "123 Main street",
          zipcode: 12345,
          city: "Scott",
        },
        {
          street: "123 Side street",
          zipcode: 35401,
          city: "Tuscaloosa",
        },
      ],
    },
    {
      name: "Python Code Dojo",
      addresses: [
        {
          street: "123 Party street",
          zipcode: 68863,
          city: "Nebraska",
        },
        {
          street: "123 Monty street",
          zipcode: 33306,
          city: "Florida",
        },
      ],
    },
  ],
};

// Parsing JSON

// A JavaScript string can be converted to a JSON object using the JSON.parse()
// function. Data that is received from another place is always of value string, so in
// order to treat it as an object, it needs to be converted.

let str = '{"name": "Chris", "age": 30}';
let obj = JSON.parse(str); //Converts into a string
// console.log(obj.name, "is", obj.age);

// Objects can be converted to a
// JSON string using the JSON.stringify() method. It converts the object or value from
// JavaScript to a JSON string. You can see it in action here:
let dog = {
  name: "Dogie",
  breed: "dachshund",
  fierceful: true,
};

let strdog = JSON.stringify(dog); //Converts Objects into JSON
console.log(strdog);

let string = '{"val1": "10", "val2": "str"}';
let srt = JSON.parse(string);
// console.log(srt);
console.log(`Value is`, srt.val1);
