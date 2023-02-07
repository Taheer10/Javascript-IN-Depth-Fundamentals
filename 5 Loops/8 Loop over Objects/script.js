let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// for (let key of Object.keys(car)) {
//   console.log(key);
// }

// let arrKeys = Object.keys(car);
// for (let i = 0; i < arrKeys.length; i++) {
//   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }

// More interesting is how to loop over both arrays at the same time using the for of
// loop. In order to do so, we will have to use Object.entries().
let arrEntries = Object.entries(car);
console.log(arrEntries);

// As you can see, it is returning a two-dimensional array, containing key-value pairs.
// We can loop over it like this:
for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}
