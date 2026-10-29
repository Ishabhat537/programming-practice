function multiply(a,b){
    return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5));  //NaN
console.log(multiply(5,undefined));  //NaN


//USING DEFAULT PARAMETER
function multiply(a,b=1){ //default parametr b=1
    return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5));  //5
console.log(multiply(5,undefined));  //5

//passing undefined vs other falsy values
function test(num=1){
    console.log(typeof num);
}
test(); //number
test(undefined);  //number

test("");  //String
test(null);  //object


//default argument are evaluated at call time
function append(value, array = []) {
  array.push(value);
  return array;
}

console.log(append(1)); // [1]
console.log(append(2)); // [2], not [1, 2]


//same for functions and variables
function something(thing=callSomething()){
    return thing;
   
}
 let num=0;
    function callSomething(){
        num+=1;
       return num;
    }
console.log(something());
console.log(something());
