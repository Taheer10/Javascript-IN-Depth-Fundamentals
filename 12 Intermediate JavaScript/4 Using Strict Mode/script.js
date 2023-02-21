// We can change the understanding and forgiving behavior of JavaScript to some
// extent using strict mode. You can switch on strict mode with the following command
// in your code.
"use strict"; //Works for whole Script

function sayHi() {
  "use strict"; //Works in this function only

  greeting = "Hello!"; //Greeting is not defined
  console.log(greeting);
}
sayHi();

// ReferenceError: greeting is not defined
