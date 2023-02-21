// With local storage, we can save
// key-value pairs in our web browser and use them again in a new session (when the
// browser is opened again later).

// The advantage of local storage over
// cookies is that they don't need to be passed around with every HTTP request, which
// is the case with cookies. Local storage just lives there and waits to be accessed.

// We use setItem() whenever we want to save something and getItem()
// whenever we want to retrieve the value later.

let message = "Hello Local storage !";
localStorage.setItem("example", message);
if (localStorage.getItem("example")) {
  document.getElementById("stored").innerHTML = localStorage.getItem("example");
  console.log(localStorage.getItem("example"));
}
// This code snippet outputs Hello storage! on the page. You can add items to
// storage by specifying a key and a value with the setItem method. You can access
// localStorage directly or via the window object. Here we specify example as the key
// and Hello storage

// We can also retrieve a key using the index. This is useful whenever we need to loop
// through the key-value pairs and we don't know the names of the keys. This is how to
// retrieve a key by index:
// window.localStorage.key(0);

// In this case, the key is name. In order to get the associated value, we can do this:
// window.localStorage.getItem(window.localStorage.key(0));

// We can also remove key-value pairs like this:
// window.localStorage.removeItem("name");

// we can remove all the key-value pairs from the local storage in one call:
// window.localStorage.clear();
