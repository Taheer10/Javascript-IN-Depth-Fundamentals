// function test(a, b, c) {
//   console.log("first:", a, arguments[0]);
//   console.log("second:", b, arguments[1]);
//   console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// When we update one of the parameters, the argument gets changed accordingly.
// The same goes for the other way around;
function test(a, b, c) {
  a = "nice";
  arguments[1] = "JavaScript";
  console.log("first:", a, arguments[0]);
  console.log("second:", b, arguments[1]);
  console.log("third:", c, arguments[2]);
}
// test("fun", "js", "secrets");

// function param(a, b, ...res) {
//   return ((a + b) * res)  ;
// }

// let result = param(2, 3, 8);
// console.log(result);

function showNames() {
  let lastOne = "";
  for (let i = 0; i < arguments.length; i++) {
    lastOne = arguments[i];
  }
  return lastOne;
}
console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));
