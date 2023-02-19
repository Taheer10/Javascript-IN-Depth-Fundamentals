//Also called Self-Executing Anonymous Function

// The immediately invoked function expression (IIFE) is a way of expressing a
// function so that it gets invoked immediately. It is anonymous, it doesn't have a
// name, and it is self-executing.

// (function () {
//   console.log("Hello world!");
// })();

// (function (name,age) {
//   console.log(`Hello ${name} who  is ${age}`);
// })("admin",22);

// (() => {
//   console.log("run right away");
// })();

// function is surrounded within Parenthesis
// () is used to invoke the unnamed function

// Without these parentheses around it, it would throw an error because our
// function does not have a name (this is worked around by assigning the function to a
// variable, though, where the output can be returned to the variable)

// 1. Create a variable value with let and assign a string value of 1000 to it.
// 2. Create an IIFE function and within this function scope assign a new value to
// a variable of the same name. Within the function, print the local value to the
// console.
// 3. Create an IIFE expression, assigning it to a new result variable, and assign
// a new value to a variable of the same name within this scope. Return this
// local value to the result variable and invoke the function. Print the result
// variable, along with the variable name you've been using: what value does it
// // contain now?
// 4. Lastly, create an anonymous function that has a parameter. Add logic that
// will assign a passed-in value to the same variable name as the other steps,
// and print it as part of a string sentence. Invoke the function and pass in your
// desired value within the rounded brackets.

let value = "1000";

// (function() {
//     let value = "2000";
//     console.log(value);
// })();

let result = (function () {
  let val = "Laurence";
  return val;
})();
console.log(result);
console.log(value);

(function (val) {
  console.log(`My name is ${val}`);
})("Laurence");
