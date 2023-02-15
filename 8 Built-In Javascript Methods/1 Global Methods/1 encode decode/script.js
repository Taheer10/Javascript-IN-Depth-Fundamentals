// Built-In JavaScript Methods

// The difference between a method and a function is that a function is defined
// anywhere in the script, and a method is defined inside a class

// let s = "Hello";
// console.log(
//  s.concat(" there!")
//  .toUpperCase()
//  .replace("THERE", "a")
// );

//Global Methods

// The global JavaScript methods can be used without referring to the built-in object
// they are part of.

let n = 10;

// console.log(isNaN(n));

// isNaN is made globally available without
// referring to the class it belongs to

// most common global methods

//1) Decoding and encoding URIs((uniform resource identifier)

// Encoding is simply converting from one shape to another.

//Percent encoding also known as URL encoding

// An example of when we would need this is when we are sending variables over
// the URL using the get method in a form. These variables that we are sending via the
// URL are called query parameters.

// We cannot have a URI with spaces, so working with these methods
// is crucial in order to work with variables containing spaces.

// decodeUri() and encodeUri()

let urii = "https://www.google.com/submit? name= Admin";
let encodedUri = encodeURI(urii);
// console.log("encodeuri=", encodedUri);

//Encode Uri replace spaces with %20
//Decode Uri removes the spaces from the url

// let decodedUri = decodeURI(encodedUri);
// console.log("decodeUri=", decodedUri);

// decodeUriComponent() and encodeUriComponent()
// It is used to encode and decode uri when url contains special characters like
// / ? : @ = + etc

let uri = "https://www.example.com/submit?name=maaike@ van putten";
let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// Encoding with escape() and unescape()
// These are still global methods available to do something similar to encode (escape)
// and decode (unescape).

// Practice exercise 8.1
// Output the decodeURIComponent() for the string How's%20it%20going%3F to the
// console. Also, encode the string How's it going? to be output into the console.
// Create a web URL and encode the URI:
// 1. Add the strings as variables in the JavaScript code
// 2. Using encodeURIComponent() and decodeURIComponent() output the results
// into the console
// 3. Create a web URI with request parameters http://www.basescripts.
// com?=Hello World";
// 4. Encode and output the web URI into the console

let duri = "'s%20it%20going%3F";
let decode_u = decodeURIComponent(duri);
let encode_u = encodeURIComponent(duri);
// console.log(encode_u);
// console.log(decode_u);

let web_uri = "http://www.basescripts.com?=Hello World";
let enc = encodeURI(web_uri);
// console.log(enc);

