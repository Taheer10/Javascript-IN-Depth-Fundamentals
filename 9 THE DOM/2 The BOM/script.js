// The BOM(Browser Object Model), sometimes also called the window browser object
//It communicates with the Browser

// The BOM holds all the methods and properties for JavaScript to interact with the browser.
// This is information related  to previous pages visited, the size of the window of the browser, and also the DOM.

//Some of the most important objects of the BOM
// • History
// • Navigator
// • Location

//Window History Object
console.dir(history);
window.history.go(-1); //Takes to previous page

//Window Navigator Object

// This property
// is particularly interesting because it contains information about the browser we are
// using, such as what browser it is and what version we are using, and what operating
// system the browser is running on.

console.dir(window.navigator);
console.dir(navigator);

//Window Location Object

// This contains the URL of the current web page. If you override (parts of) that
// property, you force the browser to go to a new page! How to do this exactly differs
// per browser.

console.dir(window.location);
console.dir(location);
