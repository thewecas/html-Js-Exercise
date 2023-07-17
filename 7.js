const makePizza = (toppings) => {
  return "A tasty pizza with " + toppings.join(" and ");
};

var toppings = ["Cheese", "Ham", "Bits", "Tomatoes"];

console.log(makePizza(toppings)); // Output : A tasty pizza with Cheese and Ham and Bits and Tomatoes
