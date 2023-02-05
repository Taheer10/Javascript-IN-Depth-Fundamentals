// Objects  in Js
//An object is a chance to group multiple variables into one.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof arr); //Object

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

// let dogColor =dog["color"];
// let dogColor = dog.color;

// console.log(dogColor);

//Updating object properties
// dog.dogName = "React Js";
// console.log(dog);

let variable = "age";
// console.log(dog[variable]);

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// // to use booleans, strings, or numbers
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.

let myCar = {
  name: "Mustang",
  model: 2023,
  type: "Mountain",
  mileage: 50,
  color: "black",
  isBeast: true,
};

let holdColor = myCar.color;
holdColor = "blue";
console.log(holdColor);
