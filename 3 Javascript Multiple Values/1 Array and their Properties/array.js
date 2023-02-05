//Arrays are lists of values. These values can be of all data types and one array can
// even contain different data types

//Way to define array
let animals = new Array("Lion", "Tiger", "Deer", "Elephant");
let groceries = ["apple", "cabbages", "pupkin"];
let arr = ["hi there", 5, true];

// arr3 = new Array(10); //It contains 10 empty elements
// arr4 = [10]; //Contain one element i.e 10
// console.log(arr3);

//Array Declaration using const
const arra = ["hello"];
// arra[0] = "test";

// arra = ["world"]; // TypeError: Assignment to constant variable.
//GIves error as whole array value cannot be changed when array is declared using const
// console.log(arra);

//Accessing Elements
//We can do access by referencing the array's index
console.log(groceries[2]);

//OverWriting Elements
animals[2] = "cheetah";
animals[5] = "Leopard";

console.log(animals);
