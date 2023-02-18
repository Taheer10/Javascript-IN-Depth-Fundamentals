// Events are things that happen on a web page, like clicking on something, moving the
// mouse over an element, changing an element, etc

// There is one special condition, though;
// one element can only have one event handler as an HTML attribute. So, if it has an
// onclick handler, it cannot have an onmouseover handler as well.

// . Using event listeners, we can add multiple events to one element.

// Adding event listeners is a two-step process:
// 1. Select the element you want to add an event to
// 2. Use the addEventListener("event", function) syntax to add the event
// Even though it is two steps, it can be done in one line of code:
// document.getElementById("square").addEventListener("click",
// changeColor);

//  Note that when using event listeners, we
// remove the on prefix from the event type. For example, click here references the
// same event type as onclick, but we have removed the on prefix.

// when the web page is done loading with onload:
// window.onload = function () {
//   // whatever needs to happen after loading
//   // for example adding event listeners to elements
//   alert("Window Loaded");
// };

window.onload = function () {
  document.getElementById("square").addEventListener("click", changeColor);
};
function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Practice exercise 10.9
// Try an alternative way to implement similar logic to Practice exercise 10.7. Use the
// following HTML code as a template for this exercise, and add the contents of the
// script element:
// <!doctype html>
// <html>
// <head>
//  <title>JS Tester</title>
// </head>
// <body>
//  <div>
//  <button>Button 1</button>
//  <button>Button 2</button>
//  <button>Button 3</button>
//  </div>
//  <script>
//  </script>
// </body>
// </html>
// Take the following steps:
// 1. Select all the page buttons into a JavaScript object.
// 2. Loop through each button, and create a function within the button scope
// called output.
// 3. Within the output() function, add a console.log() method that outputs
// the current object's textContent. You can reference the current parent object
// using the this keyword.
// 4. As you loop through the buttons attach an event listener that when clicked
// invokes the output() function.
