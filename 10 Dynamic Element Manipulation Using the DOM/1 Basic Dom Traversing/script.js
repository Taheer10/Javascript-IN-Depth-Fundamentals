//Basic Dom Traversing

// We can traverse the DOM using the document object that we saw in the previous
// chapter. This document object contains all the HTML and is a representation of the
// web page. Traversing over these elements can get you to the element you need in
// order to manipulate it.

// console.dir(document.body);

// childNodes is more a complete term than children. Children
// just contain all the HTML elements, so are really the nodes.
// childNodes also contain text nodes and comments. With children,
// however, you can use the ID, and therefore they are easier to use.

// To get to the treasure using children you would have to use:
// console.dir(document.body.children.forest.children.tree2.children.
// shrubbery.children.treasure);

// To get to the treasure using childNodes you would have to use your console a lot
// because text and comment nodes are also in there. childNodes is an array, so you will
// have to select the right index to select the right child. There is one advantage here: it
// is a lot shorter because you won't need to select the name separately.

// console.dir(
//   document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]
// );

// You could also combine them:
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].
// children.treasure);

// t. We can use the parentElement property to move
// back up. For example, if we use the treasure HTML sample and type this into the
// console:
// document.body.children.forest.children.tree2.parentElement;

// Not only can we move up and down, we can also move sideways. For example, if
// we select tree2 like this:
// document.body.children.forest.children.tree2;

// We can get to tree1 using:
// document.body.children.forest.children.tree2.previousElementSibling;
// And from tree1 we can get to tree2 using:
// document.body.children.forest.children.tree1.nextElementSibling;

//Selecting Elements as Objects

// Changing innerText
// document.body.children.greeting.innerText = "Hello, world!";

// The message that is displayed on the page changes from treasure to Hello World immediately.
// innerText returns the content of the element as plain text, which is not a problem in
// this case because there is only text in there. However, if there is any HTML inside
// the element you need to select, or if you want to add HTML, you cannot use this
// method. It will interpret the HTML as text and just output it on the screen. So if we
// executed this:
// document.body.children.greeting.innerText  = "<p>Bye!</p>"

// Changing innerHTML

// If you did not only want to work with plain text, or perhaps specify some HTML
// formatting with your value, you could use the innerHTML property instead. This
// property doesn't just process be plain text, it can also be inner HTML elements:
document.body.children.greeting.innerHTML = "<b>Bye!</b>";
