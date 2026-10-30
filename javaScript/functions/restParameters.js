//1
function sum(...theArgs){
    let total=0;
    for(let agrs of theArgs){
        total+=agrs;
    }
    return total;
}
console.log(sum(1,2,3));  //6
console.log(sum(2,3,4,5));

//2
function myFunc(a,b,...args){
    console.log("a=",a); //1
    console.log("b=",b);  //2
    console.log("args=",args);  //[3,4,5]
}
myFunc(1,2,3,4,5);
myFunc(1,2); //1,2,[]
myFunc(1);

//3
function func3(multiplier,...args){
    return args.map(val=>val*multiplier);
}
let ans=func3(2,3,4,5);
console.log(ans);

function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // this will never happen
}

//console.log(sortArguments(5, 3, 7, 1));
// throws a TypeError