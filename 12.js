const persistence = (num) => {
  if (num < 10) return 0;
  else {
    let product = 1;

    while (num > 0) {
      product *= num % 10;
      num = Math.floor(num / 10);
    }

    return persistence(product) + 1;
  }
};

console.log(persistence(39)); // Output : 3
console.log(persistence(999)); // Output : 4
console.log(persistence(4)); // Output : 0
