// DOM event flow

// We are going to create nested div elements. In order to illustrate this, there is a style
// added to the body

//  <div id="message">Bubbling events</div>
//     <div id="output">
//       1
//       <div>
//         2
//         <div>
//           3
//           <div>
//             4
//             <div>5</div>
//           </div>
//         </div>
//       </div>
//     </div>

//       function bubble() {
//         console.log(this.innerText);
//       }
//       let divs = document.getElementsByTagName("div");
//       for (let i = 0; i < divs.length; i++) {
//         divs[i].addEventListener("click", bubble);
//       }

// In this case, it has the default behavior. It will execute all five events, so each one
// of every nested div. And it will execute them inside out. So it will start with the
// innerText of only 5, then 45,345,2345 and 12345

// This is called event bubbling. It's what happens when you trigger the handlers on an
// element. It runs its own events first, then its parents, and so on. It is called bubbling
// because it goes up from the inner event to the outer, like water bubbles going up.

// we can alter this behavior by adding true as a third argument when you add the
// event listener like this:
// divs[i].addEventListener("click", bubble, true);

// This moving from the outer element to the inner element is called event capturing.

// The event capturing and bubbling allows us to apply a principle called event
// delegation. Event delegation is the concept where instead of adding event handlers
// to every element in a certain block of HTML, we define a wrapper and add the event
// to this wrapper element, and it then applies to all the child elements as well.
