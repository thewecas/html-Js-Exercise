const nearestLargerValue = (arr, val) => {
  let dist = Number.MAX_VALUE;
  let largerVal = null;
  let index = arr.indexOf(val);

  arr.forEach((ele, i) => {
    if (ele > val && Math.abs(i - index) < dist) {
      dist = Math.abs(i - index);
      largerVal = ele;
    }
  });

  return largerVal;
};

const arr = [1, 4, 3, 2, 5, 7];

console.log(nearestLargerValue(arr, 2)); // Output : 3
console.log(nearestLargerValue(arr, 3)); // Output : 4
console.log(nearestLargerValue(arr, 4)); // Output : 5
