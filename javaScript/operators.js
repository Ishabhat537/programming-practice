//Arithmetic operators
let a=2;
let b=5;
console.log(a+b); 
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(a**b);

//unary operators
let x=3;
const y=x++;

console.log(`x:${x},y:${y}`);  //x:4,y:3

let x1=3;
const y1=++x1;

console.log(`x1:${x1},y1:${y1}`);  //x:4,y:4


let p=4;
let q=++p + p++;
console.log(p,q);  //6,10


//Assignment operators
console.log(p+=q);
console.log(p/=q);


//comparison operatos (true/false)  (>,<,>=,<=,==,!=,===,!===)
console.log(10>5);
console.log(10>=5);
console.log("5"==5); //loose equality   (converts type automatically using type coercion)
console.log("5"===5); //strict equality   (does not converts type automatically)
console.log("5"!=5);
console.log("5"!==5);

//Ternary operators
let age=18;
let status=(age>=18)?"Adult":"Minor";
console.log(status);

//Logical operators (&&,||,!)
console.log(true&&true&&false);
console.log(!true);

console.log(false||'isha');  //true
console.log(false||7||10||false);  //true //short circuiting


