
//function decalartion and call
function myName(){
    console.log("Isha Bhat!");
}
myName();

function print1To10(){
    for(let i=0;i<=10;i++){
        console.log(i);
    }

}
print1To10();

function printNum(num){
    console.log("number is:"+num);
}
printNum(5);



//return functions
function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let ans=getSum(2,3,5);
console.log(ans);

function printName(firstName,lastName){
    let name=firstName + lastName;
    return name;
    //unreachable stat(after return)
    console.log("anythingg");
}
let name=printName("isha","bhat");
console.log(name);





//arguments keyword is not available in arrow function its only in normal functions
function addNumbers(){
    let ans=0;
    for(let i=0;i<arguments.length;i++){
        ans+=arguments[i];
    }
    return ans;

}

let result=addNumbers(10,20,30);
console.log(result);






function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


//function decalarations are hoisted

//constructors
// const multiply=new Function("p","q","return p*q");
// console.log(multiply(2,3));



//function declaration
function multiply(x,y){
    return x*y;

}
console.log(multiply(3,4));

//function expression
const multiply=function(x,y){
    return x*y;
}
let ans1=multiply(3,4);
console.log(ans1);

//arrow fn
const multiply=(x,y)=>x*y;

//method
const obj={
    multiply(x,y){
        return x*y;
    }
}


