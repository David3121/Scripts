function uniqueCharacters(stringIn) {
  // Creates a counter to keep track of any repeated integers.
  let repeated = 0;
  // Loops through each letter and compares it to the next.
  for (i = 0; i < stringIn.length; i++) {
    if (stringIn.split('')[i] === stringIn.split('')[i + 1]) {
      repeated++;
    }
  }
    return stringIn == '' ? 'Error, blank string' : repeated <= 0;
};

console.log(uniqueCharacters('apple'));
console.log(uniqueCharacters('pear'));
console.log(uniqueCharacters(''));