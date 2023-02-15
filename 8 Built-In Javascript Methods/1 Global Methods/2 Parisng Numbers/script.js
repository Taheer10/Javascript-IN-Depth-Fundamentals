//Parsing Numbers

// Making integers with parseInt(

let str = "50";
let int = parseInt(str);

// console.log(int);
// console.log(typeof int);

let str_binary = "0a1b2";
let int_f = parseInt(str_binary); //output--0 //And in the binary number case, it stops parsing as soon as it hits the b, and the
// result is 0--Cannot parse characters

let str_floatt = "1.6"; //Output --1
let int_float = parseInt(str_floatt);
// console.log(int_float, typeof int_float);

//Javascript stops parsing as soon as it finds the dot, so the result
// is 1.

let str_nan = "hello!";
let int_nan = parseInt(str_nan); //Output--Type of NaN is numbe
// console.log("Type of", int_nan, "is", typeof int_nan);

// Making floats with parseFloat()

let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is", typeof float_float);

//, parseFloat() can deal with one dot in the number, and the numbers after that are interpreted as decimals.
let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr); //output--Type of 2.3 is number
console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// Executing JavaScript with eval()

// This global method executes the argument as a JavaScript statement.

{
  /* <html>
 <body>
 <input onchange="go(this)"></input>
 <script>
 function go(e) {
 eval(e.value);
 }
 </script>
 </body>
</html> */
}
