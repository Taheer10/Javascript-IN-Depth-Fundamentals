//Functions are a great building block that
// will reduce the amount of code you will need in your app.
// Functions are actions

//Basic Functions

// function Greetings() {
//   let name = "admin";
//   console.log(`Hello ${name}`);
// }

// Greetings();

// Functions assigned to Variable

// let varGreetings = function () {
//   let name = "admin";
//   console.log(`Hello ${name}`);
// };

// varGreetings();

// Naming functions
// Giving your function a name might seem like a trivial task, but there are some best
// practices to keep in mind here. To keep it short:
// • Use camelCase for your functions: this means that the first word starts with a
// lowercase letter and new words start with a capital. That makes it a lot easier
// to read and keeps your code consistent.
// • Make sure that the name describes what the function is doing: it's better to
// call a number addition function addNumbers than myFunc.
//  Use a verb to describe what the function is doing: make it an action. So
// instead of hiThere, call it sayHi.

// Practice exercise 6.1
// See if you can write a function for yourself. We want to write a function that adds
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together,
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using
// console.log.
// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.

function addNumbers(x, y) {
  return x + y;
}
// console.log(addNumbers(10, 20));
// console.log(addNumbers(5, 80));

// Practice exercise 6.2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function.

let words = ["a", "b", "c", "d"];

function userName(name) {
  let randomValue = Math.floor(Math.random() * words.length);
  console.log(words[randomValue], name);
}
userName("admin");
