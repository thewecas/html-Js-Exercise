let greeting = "hello";
let name = "world";

let message = `${greeting} ${name}`;

//alert the message
alert(message);

//replace l->1 , o->0
const replacer = {
  l: "1",
  o: "0",
};

const regex = /l|o/gi;

let morphMessage = message.replace(regex, (match) => replacer[match]);

console.log(morphMessage); // Output : he110 w0r1d

//reverse the morphMessage
const reverseString = (str) => str.split("").reverse().join("");

let revMessage = reverseString(morphMessage);
console.log(revMessage); // Output : d1r0w 011eh
