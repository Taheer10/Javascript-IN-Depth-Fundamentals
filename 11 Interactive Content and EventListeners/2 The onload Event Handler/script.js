// The onload event handler

// onload is similar, but it's different for the window and document objects. The
// difference depends on the web browser you are using. The load event fires at the
// end of the document loading process. Therefore, you will find that all the objects
// in the document are in the DOM and the assets have finished loading.

// DOMContentLoaded(). This event can be used
// to handle the event of the DOM loading, which will get fired immediately after the
// DOM for the page has been constructed when the event is set.

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
// });

//We cannot combine addEventListener() and the HTML
// by using them together. One will overwrite the other, depending on the order of
// the web page.

// If we need two events to happen when the DOM is loaded, we will
// need two addEventListener() calls in your JavaScript.

// Practice exercise 11.3
// Using a basic HTML file, the below exercise will demonstrate the order of loading for
// the window object and the document object using DOMContentLoaded, which is an event
// that fires once the document object content is loaded in the browser. The window
// object will load afterward, even if the window.onload statement comes first.
// 1. Within a basic HTML file, create a function named message that requires two
// parameters, the first one being a string value for the message and the second
// an event object. Within the function, output into the console using console.
// log the event and the message.
// 2. Using the window object, attach an onload function to the event object. Invoke
// the function, passing a string value of Window Ready and the event object to
// the message function for output.
// 3. Create a second function to capture the DOM content loading, and add an
// event listener listening for DOMContentLoaded to the document object. Once
// that event is triggered, pass the event object and a string value of Document
// Ready to the message output function.
// 4. Change the order of the event listeners, placing the document event statement
// prior to the window onload: does it make a difference in the output?
// 5. Using the document object, add the DOMContentLoaded event listener, which
// will send to the function the arguments of Document Ready and the event
// object that was triggered.
// 6. Run the script and see which event is triggered first; change the order of the
// events to see if the output sequence changes.
