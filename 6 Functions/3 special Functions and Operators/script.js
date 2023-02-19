//Special Functions and Operators

// There are a few special ways of writing functions, as well as some special operators
// that will come in handy.

// //Arrow Functions
// Arrow functions are useful whenever you want to write an implementation on the
// spot, such as inside another function as an argument.

const addNumber = (x, y) => {
  return x + y;
};

// console.log(addNumber(21, 65));

let doingArrowStuff = (x) => console.log(x);
// doingArrowStuff("Great!");

// const arr = ["squirrel", "alpaca", "buddy"];

// arr.forEach((x) => console.log(x));

//Spread Operator
// The spread operator is a special operator. It consists of three dots used before a
// referenced expression or string, and it spreads out the arguments or elements of an
// array.

let spread = ["so", "much", "fun"];
// console.log(`${...spread}`) //Cannot use spread operator inside template literal
// console.log(`Javascript is funckin`,...spread);
// console.log(...spread);

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

function addFourNumbers(x, y, z, a) {
  // console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);

// //Rest Parameter
// It has the same symbol as
// the spread operator, but it is used inside the function parameter list.

function someFunction(param1, ...param2) {
  //Rest Parameter
  console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");
