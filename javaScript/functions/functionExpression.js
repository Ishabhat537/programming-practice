//function Expression

const getMultiplication=function(a,b){
    return a*b;
}
console.log(getMultiplication(2,5));


// console.log(factorial(5));  //function expressions are not hoisted
const factorial=function(n){
    if(n==0||n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));