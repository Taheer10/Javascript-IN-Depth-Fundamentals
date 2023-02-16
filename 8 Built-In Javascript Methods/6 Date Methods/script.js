// One way to create dates is by using the different constructors.
let currentDate = new Date();
// console.log(currentDate);

// built-in method, now(), that returns the current date and time

let now = Date.now();
// console.log(now);

// This will log the current time, represented in seconds since January 1st 1970. This is
// an arbitrary date representing the Unix epoch. In this case:
// 1676514963419

// We can add 1,000 milliseconds to the Unix epoch time:
let milliDate = new Date(1000);
// console.log(milliDate);

let stringDate = new Date("Wed Feb 15 2023 12:40:12 GMT+0200");
// console.log(stringDate);

// And lastly, you can also specify a certain date using the constructor:
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// Please mind this very important detail here, the second parameter is the month. 0 is
// for January and 11 is for December

// Methods to get and set the elements of a date

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2023);
// console.log(d);

d.setMonth(0);
// console.log(d);

// in order to change the day, we have to call the setDate() method
// and not the setDay() method

d.setDate(10);
// console.log(d);

// We can also change the hours:
d.setHours(10);
// console.log(d);

// The setTime() actually overrides the complete date with the inserted epoch time:
d.setTime(1676515529866);
// console.log(d);

// Parsing dates

// With the built-in parse() method we can parse epoch dates from strings

let d1 = Date.parse("June 10, 2022");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

// The input for the parse is ISO formats of dates.

// Converting a date to a string
console.log(d.toDateString()); //Output --Thu Feb 16 2023
console.log(d.toLocaleDateString()); //Output--16/02/2023

// Practice exercise 8.7
// Output the date with the full month name into the console. When converting to or
// from arrays, remember that they are zero-based:
// 1. Set up a date object, which can be any date in the future or past. Log the date
// out into the console to see how it is typically output as a date object.
// 2. Set up an array with all the named months of the year. Keep them in
// sequential order so that they will match the date month output.
// 3. Get the day from the date object value, using getDate().
// 4. Get the year from the date object value, using getFullYear().
// 5. Get the month of the date object value, using getMonth().
// 6. Set up a variable to hold the date of the date object and output the month
// using the numeric value as the index for the array month name. Due to
// arrays being zero-based and the month returning a value of 1-12, the result
// needs to be subtracted by one.
// 7. Output the result into the console.

let date = new Date(2024,7,20);
console.log(date);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = date.getDate();
console.log(day);

let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month);

let myDate = `${months[month - 1]} ${day} ${year}`;
console.log(myDate);
