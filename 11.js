// const nearestLargerValue = (arr, index) => {
//   return arr.filter((ele, i) => {
//     return i > index && ele > arr[index];
//   })[0];
// };

// const nearestLargerValue = (arr, index) => {
//   for (let i = index + 1; i < arr.length; i++)
//     if (arr[i] > arr[index]) return arr[i];
//   return null;
// };

const nearestLargerValue = (arr, index) => {
  let dist = Number.MAX_VALUE;
  let largerVal = null;

  arr.forEach((ele, i) => {
    if (ele > arr[index] && Math.abs(i - index) < dist) {
      dist = Math.abs(i - index);
      largerVal = ele;
    }
  });

  return largerVal;
};

const arr = [1, 4, 3, 2, 5, 7];

console.log(nearestLargerValue(arr, 2)); // Output : 4
console.log(nearestLargerValue(arr, 3)); // Output : 3

console.log("\n\n");
