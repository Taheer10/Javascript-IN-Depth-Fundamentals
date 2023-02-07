// const finalArray = [];
// const num = 20;
// for (let i = 0; i < num; i++) {
//   const temp = [];
//   for (let j = 0; j < num; j++) {
//     temp.push(i * j);
//   }
//   finalArray.push(temp);
// }
// console.table(finalArray);

// let step = 3;
// for (let i = 0; i < 1000; i += step) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
// }

const myArray = [1, 5, 7];
for (el in myArray) {
  console.log(Number(el));
  el = Number(el) + 5;
  console.log(el);
}
console.log(myArray);
