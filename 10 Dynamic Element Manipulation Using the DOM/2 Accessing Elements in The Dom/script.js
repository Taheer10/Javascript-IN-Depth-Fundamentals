//Accessing Elements By Id
let id = document.getElementById("one");

// Practice exercise 10.2
// Try experimenting with getting elements by their IDs:
// 1. Create an HTML element and assign an ID in the element attribute.
// 2. Select the page element using its ID.
// 3. Output the selected page element into the console.
const id2 = document.getElementById("two");
// console.log(id2);

//Accessing Elements By Tag name

// If we ask for elements by tag name, we get an array as a result. This is because there
// could be more than one element with the same tag name. It will be a collection of
// HTML elements, or HTMLCollection, which is a special JavaScript object. It's basically
// just a list of nodes. Execute the following command in the console:

const tagName = document.getElementsByTagName("div");
// console.log(tagName);//Return all the Divs of the Documents

//.item() -- Helps to select div based on index position
const singleDiv = document.getElementsByTagName("div").item(1);
// console.log(singleDiv);

// We can also access them by name, using the namedItem() method, like this:
//NamedItem only reads Id incase of Class it results in null
let namedItem = document.getElementsByTagName("div").namedItem("one");
// console.log(namedItem);

// When there is only one match, it will still return an HTMLCollection. There is only
// one h1 tag, so let's demonstrate this behavior:
let singleElement = document.getElementsByTagName("h1");
// console.log(singleElement);

// Practice exercise 10.3
// Use JavaScript to select page elements via their tag name:
// 1. Start by creating a simple HTML file.
// 2. Create three HTML elements using the same tag.
// 3. Add some content within each element so you can distinguish between them
// 4. Add a script element to your HTML file, and within it select the page
// elements by tag name and store them in a variable as an array
// 5. Using the index value, select the middle element and output it into the
// console.

//Accessing Elements by Class Name

let className = document.getElementsByClassName("example");
// console.log(className);

// Accessing elements with a CSS selector

// If we state p as a CSS selector, it means all the elements with tag p. This would look
// like this:
// document.querySelectorAll("p");
// If we say p.example, it means all the p tag elements with example as the class. They
// can also have other classes; as long as example is in there, it will match. We can also
// say #one, which means select all with an ID of one.
// This method is the same result as getElementById(). Which one to use is a matter
// of taste when all you really need to do is select by ID—this is great input for a
// discussion with another developer. querySelector() allows for more complicated
// queries, and some developers will state that getElementById() is more readable.

//Using QuerySelector
//QuerySelector selects the first element

// let queryDiv = document.querySelector("div");
// let queryDiv = document.querySelector(".example");
let queryDiv = document.querySelector("#one");
// console.log(queryDiv);

//Using QuerySelectorAll

let queryAll = document.querySelectorAll("div");
console.log(queryAll);

// This returns:
// NodeList(3) [div#one.example, div#two.example, div#three.something]
