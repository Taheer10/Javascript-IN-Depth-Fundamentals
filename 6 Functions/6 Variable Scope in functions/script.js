//Local Variables in functions

//  Scope defines where you can access a certain variable

// Local variables are only in scope within the function they are defined. This is true
// for let variables and var variables.

// function testAvailability(x) {
//   console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x);

// When called inside the function, x will be logged. The statement outside of the
// function fails, because x is a local variable to the function testAvailability(). This is
// showing that the function parameters are not accessible outside of the function.

// the local variables declared inside a function are not available
// outside of the function, but with return you can make their values available outside
// the function.

// function testAvailability() {
//   let y = "I'll return";
//   console.log("Available here:", y);
//   return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

// let versus var variables
// var is that var is function-scoped

//  let is actually not function-scoped but block-scoped. A
// block is defined by two curly braces { }.

// function sayName(name) {

//   if (name === "a") {
//   console.log(age);
//       let age = "f-scoped";
//Gives reference error x is not initialized
// This is because variables
// declared with let cannot be accessed before being defined, even within the same
// block.
//   }
// }

// sayName("a");

function sayName(name) {
  if (name === "a") {
    console.log(age);
    var age = "f-scoped";
  }
}

// sayName("a");

// When we use a var variable before the define
// statement, we simply get undefined. This is due to a phenomenon called hoisting,
// which means using a var variable before it's been declared results in the variable
// being undefined rather than giving a ReferenceError

//CONST SCOPE

// Constants are block-scoped, just like let.

function doingStuff() {
  if (true) {
    const X = "local";
  }
  console.log(X);
}
// doingStuff();

//Global Variables

// global variables are variables declared outside a
// function and not in some other code block.

let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar);
}
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// console.log(a);
// let a=20;//ReferenceError: Cannot access 'a' before initialization
// var a=10; //Undefined:

let x = "global";
function doingStuff(x) {
  console.log(x);
}
// doingStuff("param");
// , local variables
// override the value of global variables.
