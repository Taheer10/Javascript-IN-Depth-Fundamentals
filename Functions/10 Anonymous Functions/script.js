// function(){
//     console.log('Hello world');
// }

// Anonymouns function needs to be assigned to a variable

let Variable = function () {
  console.log("Hello world");
};

// Variable();
// An anonymous function can be called using the variable name, like this:

// Practice exercise 6.8
// 1. Set a variable name and assign a function to it. Create a function expression
// with one parameter that outputs a provided argument to the console.
// 2. Pass an argument into the function.
// 3. Create the same function as a normal function declaration.

let vName = function (x) {
  console.log(x);
};

// vName("admins");



//Functions Callbacks
//  passing a function as an argument to another function

// let functionVariable = function () {
//   console.log("Not so secret though.");
// };

// function doFlexibleStuff(executeStuff) {
//   executeStuff();
//   console.log("Inside doFlexibleStuffFunction.");
// }

 
// doFlexibleStuff(functionVariable);



//   let calc = function(){
   
//     console.log("outside");
//   }


//   function display(test) {
//            test();
//            console.log("This is inner part of function");
//   }

//   display(calc);


let Vaariable = function () {
  console.log("Hello world");
};

// setTimeout(Vaariable,2000);
// setInterval(Vaariable,2000);



var addFive1 = function addFive1(num) {
  return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));
