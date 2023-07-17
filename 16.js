const measureDepth = (arr) => {
  if (Array.isArray(arr)) return measureDepth(arr[0]) + 1;
  else return 0;
};

console.log(measureDepth([[]])); // Output : 2
console.log(measureDepth([[[[[[]]]]]])); // Output : 6
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); //Output : 11
console.log(measureDepth("")); // Output : 0
