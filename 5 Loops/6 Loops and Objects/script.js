// //For In Loop
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// for (let prop in car) {
//   console.log(car[prop]); //Prints the values
// }
// for (let prop in car) {
//   console.log(prop); //Prints the key
// }

// Practice exercise 5.7
// In this exercise, we will experiment with looping over objects and internal arrays.
// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// 3. Create an array containing the same three items. Using either the for loop or
// the for in loop, output the values from the array into the console.
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (const key in obj) {
//    console.log(obj[key]);
// }
// for (const key in obj) {
//   console.log(key);
// }
let arr = [1, 2, 3];

for (const i of arr) {
  console.log(i);
}
