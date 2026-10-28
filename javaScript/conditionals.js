let age=18;
if(age<18){
    console.log("Minor");
}else if(age==18){
    console.log("can give first vote");
}else{
    console.log("Can Vote")
}


//Switch Statement
let num=3;
switch(num){
    case 1: console.log("A");
    case 2: console.log("B");
    case 3: console.log("C");
    case 4: console.log("D");
    default: console.log("F");

}

// without break it willl print the true stat and all the below stat also

let num2=3;
switch(num2){
    case 1: console.log("A");
    break;
    case 2: console.log("B");
    break;
    case 3: console.log("C");
     break;
    case 4: console.log("D");
     break;
    default: console.log("F");

}