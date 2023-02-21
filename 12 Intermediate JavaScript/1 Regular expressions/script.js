// Regular expressions
// Regular expressions, also known as regex, are simply ways to describe text patterns.
// You can consider them next-level strings.

// This regex checks for a valid email, for example:
// /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g

// The regex pattern is specified between two slashes. This is a valid
// regex expression:
// /JavaScript/

// The above expression will match if a given string contains the word JavaScript.

//  built-in functions that use regex

// let text = "I love JavaScript!";
// console.log(text.match(/javascript/)); //Outputs null because it is case Sensitive

// console.log(text.match(/JavaScript/));

// console.log(text.match(/javascript/i)); //i makes it case insensitive
// This will actually log the result, because it is now case-insensitive, and from that
// point of view, our string does contain javascript.

// Specifying multiple options for words

// In order to specify a certain range of options, we can use this syntax:
// let text = "I love JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));

// Here, the expression matches either javascript, nodejs, or react. At this point, we
// are only matching for the first encounter and then we quit

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));

//  we are checking
// for all matches, and it is case-insensitive. All the modifiers are behind the last slash.
// we can use multiple modifiers at the same time as we do below, or we could decide
// to only use g:

// Character options

// console.log(text.match(/[abcd]/));
// This will log:
// [ 'd', index: 0, input: 'd', groups: undefined ]

// And if we wanted any letter, lowercase or uppercase, we would write this:
// let text = "t";
// console.log(text.match(/[a-zA-Z]/));

// Searching and replacing strings

// let text = "That's not the case.";
// console.log(text.search(/Case/i));

// without Global Modifier

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript"));
// This is what it outputs:
// JavaScript is fun. Coding opens up a lot of opportunities.

// with Global Modifier
let text = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text.replace(/Coding/g, "JavaScript"));
// The result is as follows:
// JavaScript is fun. JavaScript opens up a lot of opportunities.

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));
