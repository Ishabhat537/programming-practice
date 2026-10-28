//Arrow Functions
const power=(a,b)=>{
    return a**b;
}
console.log(power(2,2));

const add=(a,b)=>a+b;  // Implicitly returns a + b
console.log(add(1,2));


 const add2=(a,b)=>{
    return a+b;  //Must explicitly return a value
 }
 console.log(add2(5,5));


// sayHello();   //ARROW FUNCTIONS are not hoisted
// const sayHello=()=>{
//     console.log("hello");
// }

// this keyword with normal fns
const obj={
    value:20,
    myFunction:function(){
        console.log(this.value); 
       }
}
obj.myFunction();     //20


// this keyword with arrow fns
const obj2={
    value:20,
    myFunction:()=>{
        console.log(this);
        console.log(this.value); 
       }
}
obj2.myFunction(); //undefined





