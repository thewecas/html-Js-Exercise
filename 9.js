const printStrFrame = (arr) => {
  //find length of largest element from the array
  let len = 0;
  len = arr.reduce((ele, len) => {
    return ele.length > len ? ele.length : len;
  }, len).length;

  //print the frame
  console.log("*".repeat(len + 4));

  arr.forEach((ele) => {
    console.log(`* ${ele}${" ".repeat(len - ele.length)} *`);
  });

  console.log("*".repeat(len + 4));
};

const arr = ["Hello", "World", "in", "a", "frame"];
printStrFrame(arr);
