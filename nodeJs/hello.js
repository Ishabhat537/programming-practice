// const math=require("./math"); 
//  or
const {add,sub}=require("./math");

console.log("hello world!");

// console.log(window);  
// console.log(alert("hello!"));  //nodeJs has no built-in browser dom

// console.log("math value is:",math(2,5));
console.log("math value is:",math.add(2,5));
console.log("math value is:",math.sub(3,2));

//or

console.log("math value is:",add(2,3));
console.log("math value is:",sub(3,2));
