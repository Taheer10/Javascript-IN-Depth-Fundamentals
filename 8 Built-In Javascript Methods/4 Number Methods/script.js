// Checking if something is (not) a number

// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "5";
// console.log(isNaN(str));

// Checking if something is finite

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// Checking if something is an integer

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));


// Specifying a number of decimals

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// This logs 1.23456 1.235 as output.

// Specifying precision

let x = 1.23456;
let newX = x.toPrecision(4); 
console.log(newX);
// This will log 1.235