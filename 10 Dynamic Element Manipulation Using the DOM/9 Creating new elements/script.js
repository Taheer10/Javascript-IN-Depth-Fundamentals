// This consists of two steps, first creating new elements and second
// adding them to the DOM
// let el = document.createElement("p");
// el.innerText = Math.floor(Math.random() * 100);
// document.body.appendChild(el);

// we could also add it to another element; just select the
// element we want to add it to and use the appendChild() method.

function addRandomNumber() {
  let para = document.getElementById("para");
  console.log(para);
  let el = document.createElement("p");
  el.innerText = Math.floor(Math.random() * 100);
  para.appendChild(el);
}

// Practice exercise 10.10
// Shopping list: Using the following HTML template, update the code to add new
// items to the list of items on the page. Once the button is clicked, it will add a new
// item to the list of items:
// <!DOCTYPE html>
// <html>
// <head>
//  <title>Complete JavaScript Course</title>
//  <style>
//  </style>
// </head>
// <body>
//  <div id="message">Complete JavaScript Course</div>
//  <div>
//  <input type="text" id="addItem">
//  <input type="button" id="addNew" value="Add to List"> </div>
//  <div id="output">
//  <h1>Shopping List</h1>
//  <ol id="sList"> </ol>
//  </div>
//  <script>
//  </script>
// </body>
// </html>

// function addItem() {
//     let inputValue = document.getElementById("addItem");
//     let outputValue = document.getElementById("output");
//     let newOl = document.createElement("ol");
//     let innerText = inputValue.value;

//     //Appending newOl to Output
//     outputValue.appendChild(newOl);
//     newOl.innerText = innerText;

//     console.log(innerText);
//     console.log(newOl);
//     console.log("Button clicked");
// }


document.getElementById("addNew").onclick = function () {
 addOne();
 }
 function addOne() {
   var a = document.getElementById("addItem").value;
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(a));
   document.getElementById("sList").appendChild(li);
 }
