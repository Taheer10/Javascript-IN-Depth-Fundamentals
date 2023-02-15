// Finding the highest and lowest number

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);//Output--NaN

// Square root and raising to the power of

let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);output--5^3=125

// let result2 = Math.pow(10, 2);
// console.log(result2);output--10^2=100

// Turning decimals into integers

let x = 6.78;
let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// X: 6.78 becomes 7
// Y: 5.34 becomes 5

//Math.ceil increase value rather than rounding up
console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));

// X: 6.78 becomes 7
// Y: 5.34 becomes 6

let negativeX = -x;
let negativeY = -y;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// negativeX: -6.78 becomes -6
// negativeY: -5.34 becomes -5

//Math.floor(negative)
// Again, careful with negative numbers here, because it can feel counterintuitive:
// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));
// This logs:
// negativeX: -6.78 becomes -7
// negativeY: -5.34 becomes -6


//Trunc
// trunc(). This gives the exact same result as floor() for 
// positive numbers, but it gets to these results differently. It is not rounding down, it is 
// simply only returning the integer part
console.log("X:", x, "becomes", Math.trunc(x));
console.log("Y:", y, "becomes", Math.trunc(y));
// This will log:
// X: 6.78 becomes 6
// Y: 5.34 becomes 5

// Exponent and logarithm 

// The exponent is the number to which a base is being raised

let x1 = 2;
let exp = Math.exp(x1);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);


// Practice exercise 8.6
// Experiment with the Math object with these steps:
// 1. Output the value of PI into the console using Math.
// 2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the 
// round value of 5.7, and output it into the console.
// 3. Output a random value into the console.
// 4. Use Math.floor() and Math.random() to get a number from 0 to 10.
// 5. Use Math.floor() and Math.random() to get a number from 1 to 10.
// 6. Use Math.floor() and Math.random() to get a number from 1 to 100.
// 7. Create a function to generate a random number using the parameters of min
// and max. Run that function 100 times, returning into the console a random 
// number from 1 to 100 each time.

