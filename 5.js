const sandwichCalculator = (bread, cheese = Number.MAX_VALUE) => {
  return Math.min(Math.floor(bread / 2), cheese);
};

console.log(sandwichCalculator(12)); // Output : 6
console.log(sandwichCalculator(7, 3)); // Output : 3
