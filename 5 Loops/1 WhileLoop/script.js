// While Loop
// The while loop will only be executed as long as the condition is true, so if the
// condition is false to begin with, the code inside will be skipped.
// let i = 0;
// while (i < 12) {
//   i++;
//   console.log(i);
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// let nr1 = 0;
// let nr2 = 1;
// let fibonacciArray=[];
// let temp;
// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
//  console.log(fibonacciArray);
// }

// Practice exercise 5.1
// In this exercise we will create a number guessing game that takes user input and
// replies based on how accurate the user's guess was.
// 1. Create a variable to be used as the max value for the number guessing game.
// 2. Generate a random number for the solution using Math.random() and
// Math.floor(). You will also need to add 1 so that the value is returned as
// 1-[whatever the set max value is]. You can log this value to the console for
// development to see the value as you create the game, then when the game is
// complete you can comment out this console output.

let max = 1;
let track = false;
const random = Math.floor(Math.random() * 5 + 1);
while (max === random) {
  track = true;
  console.log(track);
  break;
}
console.log(track);

console.log(random);
