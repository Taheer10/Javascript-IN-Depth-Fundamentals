// JavaScript is a loosely typed
// language. This means that JavaScript determines the type based on the value. The
// type does not need to be named explicitly. For example, if you declared a value of 5,
// JavaScript will automatically define it as a number type.



// JavaScript has seven primitives: String, Number, BigInt, Boolean, Symbol, undefined,
// and null

//String
// Difference between single and double quote
// let funActivity = 'Let's learn JavaScript';  as soon as the next single quote is detected  the other characters will not be treated as strings.
// let funActivity = "Let's learn JavaScript"; --Correct way
// let question = "Do you want to learn JavaScript? "Yes!""; will give error reason is same as mentioned above

let name = "admin"; //String Declaration
address = "somewhere"; //Js identify it as String Declaration because of the value passed in qoutes
result = `The address is ${address}`; //Template Literal
console.log(result);

//Escape Characters
// If we want single and double quotes inside the string

let str = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

// Hello, what's your name? Is it "Mike"?
// Hello, what's your name? Is it "Mike"?

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";

//Number

let intNr2 = 3434; //Integer
let intNr3 = -111;

let decNr2 = 45.78; //Float

// Boolean --Holds True or false

let bool1 = false;
let bool2 = true;

//Symbol

// Symbol can be used when it is
// important that variables are not equal, even though their value and type are the same
// (in this case, they would both be of the symbol type).

let str1 = "JavaScript is fun!";
let str5 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str5);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

// These two strings are the same: true
// These two Symbols are the same: false

//Undefined

let def;
let terribleThingToDo = undefined;
console.log(def);

//Null

let data = null;
console.log(data);

num =30;
console.log(typeof(num));
