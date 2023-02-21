// We should use let instead of var
// because of their different scopes. JavaScript hoisting is why.

// Hoisting is the principle
// of moving declarations of variables to the top of the scope in which they are defined.
// This allows us to do things that we cannot do in many other languages, and for
// good reason by the way.

x = 5;
console.log(x);
var x;

// If we try to do this with let, we'll get a ReferenceError. This is why it is better to
// use let.

// The reason this happens is that the JavaScript interpreter moves all the var
// declarations to the top of the file before processing the file. Only the declarations, not
// the initializations. This is why you get a result of undefined if you use it before having
// initialized it. And this is why it should be initialized before it has been declared. It
// was designed this way for memory allocation, but the side effects are undesirable.

//  there is a way to turn this behavior off this behavior using Strict Method
