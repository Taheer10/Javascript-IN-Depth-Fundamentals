// Debugging is a delicate art. In the beginning, it usually is very hard to spot what's
// wrong with your code. If you are using JavaScript in the browser and it is not
// behaving as you would expect, step 1 is always to open the console in the browser.
// Often it will contain errors that can help you further.
// If that doesn't solve it, you can log to the console in every step of your code, and also
// log the variables. This will give you some insight as to what is going on. It might
// just be that you are relying on a certain variable that happens to be undefined. Or
// perhaps you are expecting a certain value from a mathematical computation, but
// you've made an error and the result is something completely different from what
// you thought. Using console.log() during development to see what's happening is
// rather common.

// Breakpoints;

// We click on the line before our code (in the
// Sources panel in Chrome, but this may be different for different browsers), and a dot
// or arrow will appear. When our application is running, it will pause at this point
// to give us the opportunity to inspect the values of variables and walk through the
// code line by line from there.

// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder() {
//   let counter = val;
//   for (let i = 0; i < val; i++) {
//     counter++;
//   }
//   return counter;
// }

//Error Handling

// When we are
// dealing with code that depends on some sort of outside input, such as an API, user
// input, or a file we will need to deal with the errors that this input can cause.

//Way of Declaraing

// try {
//   somethingVeryDangerous();
// } catch (e) {
//   if (e instanceof TypeError) {
//     // deal with TypeError exceptions
//   } else if (e instanceof RangeError) {
//     // deal with RangeError exceptions
//   } else if (e instanceof EvalError) {
//     // deal with EvalError exceptions
//   } else {
//     //deal with all other exceptions
//     throw e; //rethrow
//   }
// }

// try {
//   trySomething();
// } catch (e) {
//   console.log("Oh oh");
// } finally {
//   console.log("Error or no error, I will be logged!");
// }

function test(val) {
  try {
    if (isNaN(val)) {
      throw "Not a number";
    } else {
      console.log("Got number");
    }
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Done " + val);
  }
}
// test("a");
test(100);
