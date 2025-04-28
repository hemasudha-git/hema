// This allows us to use that function from 
// that (index.js) file, and we can use it right here.
// getting the function right here  
const greet = require("./greet");
const {person1, person2, person3} = require("./peoples");
console.log(person1);
console.log(person2);
console.log(person3);
greet(person1);
greet(person2);
greet(person3);
greet("Hema");