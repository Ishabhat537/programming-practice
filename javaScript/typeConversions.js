console.log("5"+2);

//type coercion
console.log("5"-2);
console.log("5"*2);



let x=8;
x=!x;
console.log(x,typeof(x));


//falsy values
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

//all except the above are truthy values

let z=Number("123");
console.log(z);


let y=Number("123 isha");  //will give NaN
console.log(y);

let p=parseInt("123 isha");
console.log(p);

let q=parseFloat("1234.5 isha");
console.log(q);

let a="5";
let b=6;
console.log(+a+b); //using unary(+) to convert string to number

console.log(parseInt("101", 2));
console.log(parseInt("101", 10));

