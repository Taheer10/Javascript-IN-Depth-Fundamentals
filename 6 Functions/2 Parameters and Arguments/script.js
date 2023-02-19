//Parameters and Arguments

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// addTwoNumbers(1, 2);

// Practice exercise 6.3
// Create a basic calculator that takes two numbers and one string value indicating
// an operation. If the operation equals add, the two numbers should be added. If the
// operation equals subtract, the two numbers should be subtracted from one another.
// If there is no option specified, the value of the option should be add.
// The result of this function needs to be logged. Test your function by invoking it
// with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output
// the response to the console.
// 5. Update the operator value to be the other operator type—either plus or
// minus—and call to the function again with the new updated arguments.

let val1 = 10;
let val2 = 20;
let operation = "-";

function twoValuesOperation(val1, val2, op) {
  if (op == "-") {
    console.log(val1 - val2);
  } else {
    console.log(val1 + val2);
  }
}

// twoValuesOperation(val1, val2, operation);

//Default or Unsuitable Parameters

function addTwoNumbers(x = 5, y = 4) {
  console.log(x + y);
}
addTwoNumbers(); //Add Default value 5+4
addTwoNumbers(1); //Add 1 inspite of 5 and 4
addTwoNumbers(10, 52);//Add 10 and 52
