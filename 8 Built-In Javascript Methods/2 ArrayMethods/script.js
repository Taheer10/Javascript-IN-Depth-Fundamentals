// let arr = ["grapefruit", 4, "hello", 5.6, true];

// arr.forEach((x)=>console.log(x))

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//   console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// Filtering an array
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let value = arr.filter((x)=>x>50)
// console.log(value);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element) {
//   return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);
// It is important to realize that the original array has not changed, the filter()
// method returns a new array with the elements that made it through the filter.

// Checking a condition for all elements

// console.log(arr.every(checkString));

// Replacing part of an array with another part of the array

// The copyWithin() method can be used to replace a part of the array with another
// part of the array

// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr.copyWithin(0, 3, 4));

//  arr = ["grapefruit", 4, "hello", 5.6, true];
//  console.log(arr.copyWithin(0, 3, 5));

let arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
// console.log(arr);

// Mapping the values of an array

let arrayValue = [1, 2, 3, 4, 5];
let mapValue = arrayValue.map((x) => x + 5);
// console.log(mapValue);

let find = arrayValue.find((x) => x == 5);
// console.log(find);

// Using the arrow function, the map() method has created a new array, in which each
// of the original array values has been increased by 5.

// Finding the last occurrence in an array

let namee = ["terry", "thompson", "billy", "sparks", "michael"];
// console.log(namee.indexOf("terry"));
// console.log(namee.indexOf("sparks"));
// console.log(namee.lastIndexOf("thompson"));
// console.log(namee.lastIndexOf("test")); //Output -1 as it in not avalable in array

// Practice exercise 8.2
// Remove duplicates from the array using filter() and indexOf(). The starting array
// is:
// ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"]
// Using the array filter() method, this will create a new array using the elements that
// pass the test condition implemented by the function. The final result will be:
//  [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
// Take the following steps:
// 1. Create an array of names of people. Make sure you include duplicates. The
// exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the array as
// arguments within an anonymous function. Using the value, index, and array
// arguments, return the filtered result. You can set the return value to true
// temporarily as this will build the new array with all the results in the original
// array.
// 3. Add a console.log call within the function that will output the index value
// of the current item in the array. Also add the value so you can see the results
// of the item value that has the current index number and the first matching
// // result from the array's index value
// 4. Using indexOf() the current value returns the index value of the item
// and applies the condition to check to see if it matches the original index
// value. This condition will only be true on the first result so all subsequent
// duplicates will be false and not get added to the new array. false will not
// return the value into the new array. The duplicates will all be false since the
// indexof() only gets the first match in the array.
// 5. Output the new, unique value array onto the console.
const people = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

const people2 = people.filter((value, index, array) => {
  // console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
// console.log(people2);

// Practice exercise 8.3
// Using the array map() method, update an array's contents. Take the following steps:
// 1. Create an array of numbers.
// 2. Using the array map method and an anonymous function, return an updated
// array, multiplying all the numbers in the array by 2. Output the result into
// the console.
// 3. As an alternative method, use the arrow function format to multiply each
// element of the array by 2 with the array map() method in one line of code.
// 4. Log the result onto the console.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiply = () => {
//   let value = numbers.map((n) => n * 2);
//   console.log(value);
// };
// multiply();
const multiply = numbers.map(x => x * 2);

console.log(multiply);

