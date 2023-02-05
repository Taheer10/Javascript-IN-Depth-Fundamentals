//Array Methods

//Adding and replacing elements
let numbers = [1, 2, 3, 4, 5];

let fruits = ["apple", "orange", "mango"];

// console.log(fruits.push("Banana"));
// console.log(fruits);

//Splice is used to insert elements in between certain index

// fruits.splice(1, 0, "Litchi");
// console.log(fruits);
let vegetables = ["potato", "tomato", "onion"];
let arrconcatc = fruits.concat(vegetables);
// console.log(arrconcatc);

//Deleting Elements
//  arrconcatc.pop();//Deletes the last element
// console.log(arrconcatc);

// arrconcatc.shift(); //Deletes the first element
// console.log(arrconcatc);

//Splice is also used to delete elements
// console.log(arrconcatc);
// arrconcatc.splice(2, 4);
// console.log(arrconcatc);

// delete arrconcatc[0]; //delete can aslo be used to delete array elements
// console.log(arrconcatc); //without changing index of elements

//Finding Elements

let findValue = arrconcatc.find((x) => x === "a");
let findNumber = numbers.find((x) => x > 2);
// console.log(findValue);

let findIndex1 = numbers.indexOf(3);
let findIndex = numbers.indexOf(6); //False == -1
let lastIndex = numbers.lastIndexOf(5);
// console.log(lastIndex);

//Sorting

// let sortValue = numbers.sort();
// console.log(sortValue);

//Reversing

let reverseValue = numbers.reverse();
// console.log(reverseValue);

//Exercises
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:

let shoppingCart = [];
shoppingCart.push("Milk", "Bread", "Apples");
shoppingCart.splice(1, 1, "Bananas", "Eggs");
shoppingCart.pop();
let sortArray = shoppingCart.sort();
let findMilk = shoppingCart.find((x) => x === "Milk");
let indexOfMilk = shoppingCart.indexOf(findMilk);
shoppingCart.splice(1, 0, "Carrots", "lettuce");
let newList = ["juice", "Pop"];
let combineList = shoppingCart.concat(newList).concat(newList);
combineList.lastIndexOf("Pop");
// console.log(combineList.lastIndexOf("Pop"));
// console.log(findMilk);
// console.log(indexOfMilk);
// console.log(shoppingCart);
// console.log(shoppingCart);
// console.log(newList);
// console.log(combineList);

//MultiDimensional Array

let multiDimensionalArray = [
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
];

//Accessing elements in multiDimensional arrays
console.log(multiDimensionalArray[0][3]); //output array ==4 from first element of
console.log(multiDimensionalArray[1][4]); //output array element ==5
// [0] -- First index species array index
// [1] -- Second index species element inside array

// Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

let arr = [1, 2, 3];
let nestArray = [arr, arr, arr];
nestArray[0][1]; //Output ==2
console.log(nestArray[0][1]);
