// Adding classes to elements

function disappear() {
  console.log("Button Clicked");
  document.getElementById("shape").classList.add("hide");
}

//Removing classes from elements

function appear() {
  console.log("Button Clicked");
  document.getElementById("shape").classList.remove("hide");
}

// Toggling classes

// In some cases, we would want to add a class when it doesn't already have that
// particular class, but remove it when it does. This is called toggling.

//Toggle adds class on single click 
//and remove classes on multiple click

function toggle() {
  console.log("Button Clicked");
  document.getElementById("shape").classList.toggle("hide");
}
