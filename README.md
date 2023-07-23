  
## 1. Exercise - Responsive Webpage using HTML,CSS 

Design the same webpage in the given link below using HTML,CSS(Do not use Bootstrap).It Should be responsive in all the screen sizes.  
[Reference Image](1/images/webovio.jpg)    
[Preview](https://thewecas.github.io/html-Js-Exercise/1/)  
[code](./1/)

## 2. Exercise - Responsive Web Page using Bootstrap      

Design the same webpage in the given link below using HTML,CSS.It Should be responsive for all devices.  
[Reference Image](2/images/ketamine.png)  
[Preview](https://thewecas.github.io/html-Js-Exercise/2/)  
[code](./2/)

## 3. Exercise - String Concatenation  
Create a variable called greeting. Store the value `'hello'` in it.  
Create a variable called name. Store the value `'world'` in it.  
Use your variables to alert `'hello world'`.  
Use a couple of regex to change the output to `'he110 w0r1d'`  
Use a couple more functions to reverse the result.
```js
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
```

## 4. Exercise - Conditional logic
Create a little program that tells you if it's the morning, afternoon or night.
```js
const hh = new Date().getHours();

const greeting =  "Good " + (hh < 12 ? "Morning" : hh < 18 ? "Evening" : "Night");

console.log(greeting);
```


## 5. Exercise - A Sandwich Calculator  
Write a function called sandwich calculator. This should accept one value: bread  
The function should return the total number of possible sandwiches based on the amount of bread available. I need 2 breads to make one sandwich, so if there are 10 breads, it should return 5. Test your function with console.log.  
Extend your function so it accepts two values, bread and cheese.  
It takes two breads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.
```js
const sandwichCalculator = (bread, cheese = Number.MAX_VALUE) => {
  return Math.min(Math.floor(bread / 2), cheese);
};

console.log(sandwichCalculator(12));  // Output : 6

console.log(sandwichCalculator(7, 3));  // Output : 3
```
## 6. Exercise - Guess the output
For each of the following, try to work out what the output will be. Run the code in the browser console to check your answer. 


  1. 
```js
var a = 12;
(function () {
  console.log(a);
})();
// Output : 12
``` 

2.   
```js 
var a = 5;
(function () {
  var a = 12;
  console.log(a);
})();
// Output : 12
```

3.   
```js 
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();
// Output : 12
```

4.   
```js 
var a = 10;
var x = (function () {
  var y = function () {
    var a = 12;
  };
  return function () {
    console.log(a);
  };
})();
x();
// Output : 10
```
5.   
```js
var a = 10;
var x = (function () {
  (function () {
    a = 12; 
  })();
  return function () {
    console.log(a);
  };
})();
x();
// Output : 12 
```

6.   
```js 
var a = 10;
(function () {
  var a = 15;
  window.x = function () {
    console.log(a);
  };
})();
x();
// Output : 15
```

## 7. Exercise - Pizza 
Create an array of pizza toppings, like this:  
`var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];`  
Now write a function that we can call like this:  
`makePizza(toppings);`  
This function should return a string of the form:  
`"A tasty pizza with Cheese and Ham and Bits and Tomatoes"`  
```js
const makePizza = (toppings) => {
  return "A tasty pizza with " + toppings.join(" and ");
};

var toppings = ["Cheese", "Ham", "Bits", "Tomatoes"];

console.log(makePizza(toppings)); // Output : A tasty pizza with Cheese and Ham and Bits and Tomatoes
```

## 8. Exercise - Capitalize every element
Write a short function to capitalize every element of the array.  
You must use the Array#map function and the String#uppercase function.
```js
const capitalizeArray = (arr) => arr.map((ele) => ele.substring(0, 1).toUpperCase() + ele.substring(1));

const arr = ["hello", "there", "how are you?"];

console.log(capitalizeArray(arr)); //Output : [ 'Hello', 'There', 'How are you?' ]
```

## 9. Exercise - Array Strings
Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.  
For example the list `["Hello", "World", "in", "a", "frame"]` gets printed as:
```
*********	
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```
```js
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
```

## 10. Exercise - Array Strings
Write a function that translates a text to Pig Latin and back.   
English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.  
`“The quick brown fox"` becomes `“Hetay uickqay rownbay oxfay”`.

```js
const toPigLatin = (str) => {
  const strArr = str.split(" ");

  let morphArr = strArr.map(
    (ele) => ele.substring(1) + ele.substring(0, 1) + "ay"
  );
  
  return morphArr.join(" ");
};

const str = "The quick brown fox";
const pigStr = toPigLatin(str);
console.log(pigStr);  // Output : heTay uickqay rownbay oxfay
```


## 11. Exercise - Array Strings
Given an array with numbers, write a program that efficiently answers queries of the form: “Which is the nearest larger value for the number at position i?”, where distance is the difference in array indices.  
 For example in the array `[1,4,3,2,5,7]`, the nearest larger value for 4 is 5. 
```js
const nearestLargerValue = (arr, val) => {
  let dist = Number.MAX_VALUE;
  let largerVal = null;
  const index = arr.indexOf(val);

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
```

## 12. Exercise
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in number until you reach a single digit.  
For example (Input --> Output):  
39 --> 3 (because 3 * 9 = 27, 2 * 7 = 14, 1*4 = 4 and 4 has only one digit)  
999 --> 4 (because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1*2 = 2)  
4 --> 0 (because 4 is already a one-digit number)  

```js
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
```
## 13. Exercise - Table View & Filter using ES6 Array Functions
> ***In Progress***  

Render a table using the below JSON file given.
Columns:
- Title
- IMDB rating
- Rotten Tomatoes rating
- IMDB/Tomato Combined rating.
- View  

Where View will have its Plot.  

**Logic Requirements**:
- View 5 rows on one page. (pagination)
- Column Sort
- IMDB/Tomato Combined rating.
- Filtering using IMDB/Tomato/Combined rating

[Movies.JSON](./13/movies.json)
[Preview](https://thewecas.github.io/html-Js-Exercise/13/)  
[code](/13)



## 14. Exercise - TIC TAC TOE Game
Design a Tic-tac-toe game that is played between two players on a 3 x 3 grid.  
You may assume the following rules:
- A move is guaranteed to be valid and is placed on an empty block.
- Once a winning condition is reached, no more moves are allowed.
- A player who succeeds in placing 3 of their marks in a horizontal, vertical, or diagonal row wins the game.  
  

[Preview](https://thewecas.github.io/html-Js-Exercise/14/)  
[code](/14)

## 15. Exercise - TO DO List 
create a small to do list using javascript and higher order functions & most optimized way   

[Preview](https://thewecas.github.io/html-Js-Exercise/15/)  
[code](/15)


## 16. Exercise 
In this challenge you will receive an input of the form:  
`[[[[[[[[[[[]]]]]]]]]]]`  
In other words, an array containing an array containing an array containing... an array containing nothing.  
Your goal is to measure the depth of this array, where `[]` has a depth 1, `[[]]` has depth of 2, `[[[]]]` has depth 3, etc.  
Examples.  
`measureDepth([])` ➞ 1  
`measureDepth([[]])` ➞ 2  
`measureDepth([[[]]])` ➞ 3  
`measureDepth([[[[[[[[[[[]]]]]]]]]]])` ➞ 11

```js
const measureDepth = (arr) => {
  if (Array.isArray(arr)) return measureDepth(arr[0]) + 1;
  else return 0;
};

console.log(measureDepth([[]])); // Output : 2
console.log(measureDepth([[[[[[]]]]]])); // Output : 6
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); //Output : 11
console.log(measureDepth("")); // Output : 0
```
