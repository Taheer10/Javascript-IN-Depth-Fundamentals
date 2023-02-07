let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

//Break
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 4) {
//     break;
//   }
// }

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//       console.log("I have found my new car:", cars[i]);
//       break;
//     }
//   }
// }

//Continue

// let i = 1;
// while (i < 50) {
//   i++;
//   if ((i - 1) % 2 === 0) {
//     continue;
//   }
//   console.log(i - 1);
// }//Stucks in infinite loop

let i = 1;
while (i < 50) {
  i++;
  if ((i - 1) % 2 === 0) {
    continue;
  }
  console.log(i - 1);
}

// Practice exercise 5.8
// This exercise will demonstrate how to create a string with all the digits as it loops
// through them. We can also set a value to skip by adding a condition that will use
// continue, skipping the matching condition. A second option is to do the same
// exercise and use the break keyword.
// 1. Set up a string variable to use as output.
// 2. Select a number to skip, and set that number as a variable.
// 3. Create a for loop that counts to 10.
// 4. Add a condition to check if the value of the looped variable is equal to the
// number that should be skipped.
// 5. If the number is to be skipped in the condition, continue to the next number.
// 6. As you iterate through the values, append the new count value to the end of
// the main output variable.
// 7. Output the main variable after the loop completes.
// 8. Reuse the code, but change the continue to break and see the difference. It
// should now stop at the skip value.

// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//   if (i === skipThis) {
//     continue;
//   }
//   output += i;
// }
// console.log(output);

let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    break;
  }
  output += i;
}
console.log(output);
