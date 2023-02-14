// Create a class which will allow you to work out the combined price of a number of
// items, and interact with it to work out the total cost of different orders.
// 1. Create a class that contains the prices of two menu items as private field
// declarations.
// 2. Use the constructor in the class to get the argument values (how many of
// each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how
// many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections,
// and output the total cost in the console.

class Menu {
  #offer1 = 5;
  #offer2 = 9;
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }

  calculatePrice() {
    return this.val1 * this.#offer1 + this.val2 * this.#offer2;
  }

  get total() {
    return this.calculatePrice();
  }
}

const val1 = new Menu(5, 3);
const val2 = new Menu(1, 2);
const val3 = new Menu(4, 4);

console.log(val1.total);
console.log(val2.total);
