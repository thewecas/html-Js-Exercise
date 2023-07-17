const capitalizeArray = (arr) =>
  arr.map((ele) => ele.substring(0, 1).toUpperCase() + ele.substring(1));

const arr = ["hello", "there", "how are you?"];

console.log(capitalizeArray(arr)); //Output : [ 'Hello', 'There', 'How are you?' ]

