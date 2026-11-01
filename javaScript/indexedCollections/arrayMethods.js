//concat()
let arr=[1,2,3];
arr=arr.concat("a","b","c");
console.log(arr);

//join() converts elemts of array into sinle string
const myArray = ["Wind", "Rain", "Fire"];
console.log(myArray.join());
console.log(myArray.join("-"));

//push & pop
const num=[1,2,3];
num.push(4);  //adds 4 from last
console.log(num);
num.push("5");
console.log(num);
num.pop(); //removes last element
console.log(num);

//shift & unshift
const num2=[1,2,3];
num2.shift();  //removes first element
console.log(num2);
num2.unshift(1,6,7); //adds elemts from start
console.log(num2);

//slice
let myArray2 = ["a", "b", "c", "d", "e"];
myArray2 = myArray2.slice(1, 4);

//splice
