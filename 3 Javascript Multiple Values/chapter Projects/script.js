// Manipulating an array
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList[0] = "FIRST";
theList.pop();
theList.pop();
theList.pop();
theList.pop();
delete theList[2];
theList[2] = "MIDDLE";
theList[3] = "hello World";
// theList.push("LAST");
theList[4] = "LAST";
// console.log(theList);

// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.

const items = [];
const name = "The odin Project";
const model = "2001";
const cost = 2000;
const quantity = 20;

items.push(name);
items.push(model);
items.push(cost);
items.push(quantity);

items[2] = 3000;
// let com = name.concat(model).concat(cost).concat(quantity);
// console.log(com);
console.log(items);
// console.log(items[2]);

console.log(items.length);
