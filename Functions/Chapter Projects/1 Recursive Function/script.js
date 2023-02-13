// Create a recursive function
// Create a recursive function that counts up to 10. Invoke the function with different
// start numbers as the arguments that are passed into the function. The function
// should run until the value is greater than 10.

let count = 0;
function recursion() {
  if ( count <= 10) {
    console.log(count);
    count++;
    recursion();
  }
}

// recursion();



const main = function counter(i) {
  console.log(i);
  if (i < 10) {
    return counter(i + 1);
  }
  return;
};
main(0);