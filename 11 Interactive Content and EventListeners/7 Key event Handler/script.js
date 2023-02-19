// onkeypress gets triggered,
//  whenever a key gets pressed. Pressing means here
// when the button is pressed and released. If we want an event to happen as soon as
// the button is pressed (so before releasing), we can use the onkeydown event. If you
// want the event to happen on release, we can use the onkeyup event

// We can get the key that triggered the event using:

// event.key;

// So this is one way of using the onkeypress event, but we can do even more. We can
// add a return statement to our onkeypress event, like this:
// onkeypress="return numCheck2()";
