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

const item3 = {
  name: "computer",
  model: "imac",
  cost: 1000,
  qty: 3,
};
const item2 = {
  name: "phone",
  model: "android",
  cost: 500,
  qty: 11,
};
const item1 = {
  name: "tablet",
  model: "ipad",
  cost: 650,
  qty: 1,
};

items.push(item1, item2, item3);

console.log(items);
