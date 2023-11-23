function fizzbuzz(n) {
    // An array for keeping track of the numbers and strings.
    const list = [];
    // A loop that goes through all the numbers for the parameter n.
      for (i = 1; i <= n; i++) {
      // Adds the string to list if it's a multiple of 5 or 3.
      if (i % 5 === 0 && i % 3 === 0) {
        list.push("FizzBuzz");
        // Adds the string to list if it's a multiple of 5.
      } else if (i % 5 === 0) {
        list.push("Buzz");
        // Adds the string to list if it's a multiple of 3.
      } else if (i % 3 === 0) {
        list.push("Fizz");
        // Adds the number to the list.
      } else {
        list.push(i);
      }
    }
    return list;
  };
  
  console.log(fizzbuzz(16));
  
  // Leave this line for testing:
  module.exports = fizzbuzz;
  