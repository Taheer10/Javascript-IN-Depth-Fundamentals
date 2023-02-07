// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

let options = ["rock", "Scissors", "papers"];
let message = [];

let randomUserChoice = Math.floor(Math.random() * options.length);
let randomBotChoice = Math.floor(Math.random() * options.length);
console.log(randomUserChoice, randomBotChoice);

console.log(`User : ${options[randomUserChoice]}`);
console.log(`Bot: ${options[randomBotChoice]}`);

if (
  options[randomUserChoice] === "rock" &&
  options[randomBotChoice] === "Scissors"
) {
  message.push("User Rock Wins over scissors!");
  console.log(message);
} else if (
  options[randomUserChoice] === "Scissors" &&
  options[randomBotChoice] === "papers"
) {
  message.push("User scissors Wins over Papers!");
  console.log(message);
} else if (
  options[randomUserChoice] === "papers" &&
  options[randomBotChoice] === "rock"
) {
  message.push("User Papers Wins over Rock!");
  console.log(message);
} else if (
  options[randomBotChoice] === "rock" &&
  options[randomUserChoice] === "Scissors"
) {
  message.push("Bot Rock Wins over User scissors!");
  console.log(message);
} else if (
  options[randomBotChoice] === "Scissors" &&
  options[randomUserChoice] === "papers"
) {
  message.push("Bot scissors Wins over User Papers!");
  console.log(message);
} else if (
  options[randomBotChoice] === "papers" &&
  options[randomUserChoice] === "rock"
) {
  message.push("Bot Papers Wins over User Rock!");
  console.log(message);
} else if (options[randomBotChoice] === options[randomUserChoice]) {
  message.push(
    `User ${options[randomUserChoice]} and  Bot ${options[randomBotChoice]} is equal`
  );
  console.log(message);
}
