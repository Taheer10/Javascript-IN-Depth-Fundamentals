let age = 10;

switch (age) {
  case 1:
    console.log("Supre Bigge");
    break;

  case 5:
    console.log("Biggie");
    break;

  case 10:
    console.log("Kid");
    break;

  default:
    console.log("Toddler");
    break;
}

//Combined Cases
let grade = "A";
switch (grade) {
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed!");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}

// exerceises

// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question

let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);

// exercise

// Practice exercise 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string
