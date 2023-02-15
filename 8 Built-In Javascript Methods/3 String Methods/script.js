// Combining strings

let str1 = "Tony ";
let str2 = "Starks";
// let result = str1.concat(str2);
// console.log(result);

// Converting a string to an array

// With the split() method we can convert a string to an array.

let result = "Hello Bob Subedi";
let StringSplit = result.split(" ");
// console.log(StringSplit);

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// Converting an array to a string

// With the join() method you can convert an array to a string.

let letters = ["a", "b", "c", "d", "e", "f"];
// let resultJoin = letters.join();
let resultJoin = letters.join("$");

// console.log(resultJoin);

// Working with index and positions

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("e");
let ind = poem.lastIndexOf("e");
// console.log(ind);

// An alternative way of searching for a particular substring within a string is to use the
// search() method:
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
// console.log(pos);

let char = searchStr.charAt(25);
// console.log(char);

// Creating substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// The first one only has one argument, so it starts at index 5 (which holds an e) and
// grabs the rest of the string from there. The second one has two arguments, 0 and 3. C
// is at index 0 and a is at index 3. Since the last index is not included in the substring,
// it will only return Cre.

// Replacing parts of the string

let txt = "Hello mark";
let rep = txt.replace("mark", "Henry");
let rep2 = txt.replace("bac", "abc");
// console.log(rep);
// console.log(rep2); //Output --Hello Mark as bac is not present in the string

// . If the string you are targeting
// doesn't appear in the original string, the replacement doesn't take place and the
// original string will be returned

// replaceAll() method.

let s3 = "hello  world  hello";
let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// Uppercase and lowercase

let low_bye = "bye!";
let up_byee = low_bye.toUpperCase();
let up_bye = low_bye.charAt(0).toUpperCase();
// console.log(up_bye);

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//  first letter of the sentence to be capitalized.

let sentence = "HELLO GEORGE WHERE HAVE YOU BEEN?";
let lowerCase = sentence.toLowerCase();
let firstLetter = lowerCase.charAt(0).toUpperCase().concat(lowerCase.slice(1));
// console.log(firstLetter);

// The start and end of a string

let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
let bool_end = encouragement.endsWith("up");
// console.log(bool_start);

// Practice exercise 8.4
// Using string manipulation, create a function that will return a string with the first
// letter of all the words capitalized and the rest of the letters in lowercase. You should
// transform the sentence thIs will be capiTalized for each word into This Will Be
// Capitalized For Each Word:
// 1. Create a string with several words that have letters with different cases, a
// mix of upper and lowercase words.
// 2. Create a function that gets a string as an argument, which will be the value
// that we will manipulate.
// 3. In the function first transform everything to lowercase letters.
// 4. Create an empty array that can hold the values of the words when we
// capitalize them.
// 5. Convert the phrase into words in an array using the split() method.
// 6. Loop through each one of the words that are now in the new array, so you
// can select each one independently. You can use forEach() for this
// 7. Using slice() isolate the first letter in each word, then transform it to
// uppercase. Again using slice(), get the remaining value of the word
// without including the first letter. Then concatenate the two together to form
// the word that is now capitalized.
// 8. Add the new capitalized word into the blank array that you created. By the
// end of the loop you should have an array with all the words as separate
// items in the new array.
// 9. Take the array of updated words and using the join() method, transform
// them back into a string with spaces between each word.
// 10. Return the value of the newly updated string with capitalized words that can
// then be output into the console

// let val = " Inorder TO BrinG THe Changes you MuST StarT with Your SELF FIRSt.";
function wordsCaps(str) {
  str = str.toLowerCase();
  const tempArr = [];
  let words = str.split(" ");
  words.forEach((word) => {
    let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
    tempArr.push(temp);
  });
  return tempArr.join(" ");
}
// console.log(wordsCaps(val));

// Practice exercise 8.5
// Using the replace() string method, complete this vowel replacer exercise by
// replacing the vowels in a string with numbers. You can start with this string:
// I love JavaScript
// And turn it into something like the following:
// 2 l3v1 j0v0scr2pt
// Take the following steps:
// 1. Create the previously specified string, and convert it to lowercase.
// 2. Create an array containing the vowels: a, e, i, o, u.
// 3. Loop through each letter you have in the array, and output the current letter
// into the console so that you can see which letter will be converted.
// 4. Within the loop, using replaceAll() update each vowel substring with the
// index value of the letter from the vowel array.
// 5. Once the loop completes output the result of the new string into the console

let val = "I love JavaScript";
val = val.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((letter, index,array) => {
  console.log(letter,index, array.indexOf(letter));
  val = val.replaceAll(letter, index);
});
console.log(val);
