// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

let randomNumber = Math.floor(Math.random() * 10 + 1);
let userNumber = 5; //It can be prompt

if (userNumber === randomNumber) {
  console.log(`User Number and randomNumber is equal that is ${randomNumber} `);
}else{
    console.log(`User Number and randomNumber is not same that is randomNumber:${randomNumber} and UserNumber is: ${userNumber}`);
}
