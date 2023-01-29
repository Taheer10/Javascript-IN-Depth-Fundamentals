// Analyzing and modifying data types

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

//Convert Data Types

let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2); //AS it is in appropriate to multiply number with string

// so it can be converted
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr); //Will return 0

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2); //NaN-- Not a number

let n1 = 2;
let n2 = "2";
console.log(nr1 + Number(nr2));

//Arithmetic Operators

// Addition //Multiplication //Division //Subtraction --All are Similarl
(a = 10), (b = 20);
console.log(a + b);
let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;

// Exponentiation

// x^y
let r1 = 2;
let r2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);

// Modulus-- Modulus is the operation in which
// you determine how much is left after dividing a number by another number in its
// entirety.

let num1 = 10;
let num2 = 3;
let resul = num1 % num2;
console.log(`${num1} % ${num2} = ${resul}`);

//Unary operators: increment and decrement

let u1 = 4;
// u1++;-- result = 5
++u1; //-- result = 5;

console.log(u1);
let u2 = 4;
// u2--; //result = 3
--u2; //-- result =3
console.log(u2);

//Prefix and postfix operators

//Postfix
//The postfix gets executed after sending the variable through, and then after that, the operation gets executed.
let p1 = 2;
console.log(p1++);
console.log(p1);
//Output
// 2
// 3

//Prefix
//The prefix gets executed before sending the variable through, and often this is the one
// you will need.

let pre1 = 2;
console.log(++pre1);
//Output
// 3

let po1 = 4;
let pre2 = 5;
let po3 = 2;
console.log(po1++ + ++pre2 * po3++);
//Output
// 16

//combining the Operators
// Grouping (...) (x + y)
// Exponentiation ** x ** y
// Prefix increment and decrement --, ++ --x, ++y
// Multiplication, division, modulus *, /, % x * y, x / y, x % y
// Addition and subtraction +, - x + y, x - y

//Comparison Operators
let x1 = 5;
let y1 = "5";
console.log(x1 == y1); //True
console.log(x1 === y1); //False
// let x = 5;
// let y = "5";
// console.log(x != y); //False

// Logical Operator
//AND //OR //NOT
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
console.log(x > y || y < z);
console.log(!(x < y)); //False

//Chapter Project

//Miles into Kilometers
let mile = prompt("Enter the miles to converted to kilometers");
let kilometer = mile * 1.6094;
console.log(kilometer);

//Bmi Calculations
