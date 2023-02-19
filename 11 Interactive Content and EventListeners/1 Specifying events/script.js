// Interactive content is content that responds to the actions of a user

// Specifying events
// One is HTML-based and the other two are JavaScript-based

// Specifying events with HTML
// First, the HTML way:
// <p id="unique" onclick="magic()">Click here for magic!</p>

// The downsides of html event is we  can only
// specify one event this way, and we cannot change the event dynamically either.

// Specifying events with JavaScript
// Here is the first way to do it using JavaScript.
// document.getElementById("unique").onclick = function() { magic(); };

// We can overwrite this with another function anytime,
// making the event that can be fired more dynamic.

// Specifying events with event listeners

// the addEventListener() method allows to specify multiple functions
// for the same event, for  example, when an element gets clicked.

// document.getElementById("unique").addEventListener("click", magic);
// Please note that we are leaving out the parentheses behind the magic function here.

// Practice exercise 11.2
// Create several divs with color names in textContent. Add JavaScript to add
// click event listeners to each element, and as each element is clicked, update the
// background color of the body to match the color name in the div.
