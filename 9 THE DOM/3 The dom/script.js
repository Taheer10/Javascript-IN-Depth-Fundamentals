// It is a way of displaying the structure of an HTML document as a logical tree.
//  This is possible because of the very important rule that inner elements need to be closed before outer elements get
// closed.

console.dir(document);

// Selecting page elements

// To select page elements to use within your JavaScript code and in order to
// manipulate elements, you can use either the querySelector() or querySelectorAll()
// method.

// The document.querySelector() method will return the first element within the
// document that matches the specified selectors. If no matching page elements are
// found, the result null is returned.

// The querySelectorAll() method will return a static NodeList, which represents a
// list of the document's elements that match the specified group of selectors

// <!doctype html>
// <html>
//  <head>
//  <title>JS Tester</title>
//  </head>
//  <body>
//  <h1 class="output">Hello World</h1>
//  <div class="output">Test</div>
//  </body>
// </html>

// const ele1 = document.querySelector("h1");
// console.dir(ele1);

// const eles = document.querySelectorAll(".output");
// console.log(eles);




// Practice exercise 9.3
// Select a page element and update the content, change the style, and add attributes. 
// Create an HTML file containing a page element with a class of output using the 
// following code template: 
// <!DOCTYPE html >
// <html>
// <div class="output"></div>
//  <script>
//  </script>
// </html>
// Within the script tags, make the following changes to the output element:
// 1. Select the page element as a JavaScript object.
// 2. Update the textContent property of the selected page element.
// 3. Using the classList.add object method, add a class of red to the element.
// 4. Update the id property of the element to tester.
// 5. Through the style object, add a backgroundColor property of red to the page 
// // element
// 6. Get the document URL via document.URL and update the text of the output 
// element to contain the value of the document URL. You can log it in the 
// console first to ensure you have the correct value.