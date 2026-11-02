
//creating empty items 
const arr= [1, 2, , , 5];
console.log(arr);
console.log(arr[2]);  //undeifned

const arr2=new Array(4);
console.log(arr2);

for (const i of arr) {
  console.log(i);
}

const another=[...arr];
console.log(another);


//some array iteration methods skips empty items
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Property enumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// Logs: '0' '1' '4'
// Spreading into an object uses property enumeration, not the array's iterator
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }