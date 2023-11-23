function primeFinder(n) {
    // A variable to store prime numbers.
      let primeNumber = [];
    for (i = 1; i <= n; i++) {
    // Ensures that 2 and 3 are included as prime numbers.
        if (i === 1) {
          continue; }
        if (i === 2) {
          primeNumber.push(i); }
        if (i === 3) {
          primeNumber.push(i); }
    // An if statement that checks for prime numbers.
        if (i % 2 != 0 && i % 3 != 0) {
          primeNumber.push(i);
        }
      }
    return primeNumber;
};
    
console.log(primeFinder(11));
