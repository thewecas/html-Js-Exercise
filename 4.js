const hh = new Date().getHours();

const greeting =
  "Good " + (hh < 12 ? "Morning" : hh < 18 ? "Evening" : "Night");

console.log(greeting);
