const printStrFrame = (arr) => {
  //find length of largest element from the array
  const maxLen = arr.reduce((len, ele) => {
    return ele.length > len ? ele.length : len;
  }, 0);

  //print the frame
  console.log("*".repeat(maxLen + 4));

  arr.forEach((ele) => {
    console.log(`* ${ele}${" ".repeat(maxLen - ele.length)} *`);
  });

  console.log("*".repeat(maxLen + 4));
};

const arr = ["Hello", "World", "in", "a", "frame"];
printStrFrame(arr);
