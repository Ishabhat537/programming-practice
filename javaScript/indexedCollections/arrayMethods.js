//concat()
let arr=[1,2,3];
arr=arr.concat("a","b","c");
console.log(arr);

//join() converts elemts of array into single string
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
// myArray2 = myArray2.slice(1, 4);
console.log(myArray2.slice(-2));

//splice
let arr3=[10,20,40,50];
console.log(arr3.splice(2,0,30));
console.log(arr3);
arr3.splice(2,1,60); //10,20,60,40,50
console.log(arr3);

//reverse
const reverse=[1,2,3];
console.log(reverse.reverse());

//flat()
const flat=[1,2,[3,4],[4,5]];
console.log(flat.flat());  //removes depth 1 by default
const flat2=[1,2,3,[4,5,[5,6,7]]];
console.log(flat2.flat()); //1,2,3,4,5[5,6,7] 
console.log(flat2.flat(2));  //removes till depth 2
console.log(flat2.flat(Infinity)) //removes all depths

console.log(flat.indexOf(2));

//map method
const numbers=[1,2,3,4];
let result=numbers.map((val)=>{
    return val*2;
});
console.log(result);

let fruits = ["Apple", "Mango", "Banana"];

let ans = fruits.map((fruit, index) => {
    return `${index}: ${fruit}`;
});

console.log(ans);

//filter method
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]


//find

const i = a1.find((item) => typeof item === "number");
console.log(i); // 10

//every
function isNumber(value) {
  return typeof value === "number";
}
const a = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const b = [1, "2", 3];
console.log(a2.every(isNumber)); // false
