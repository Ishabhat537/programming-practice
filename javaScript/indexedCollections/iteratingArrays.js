//common way
// const colors = ["red", "green", "blue"];
// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

//using forEach method
const colors = ["red", "green", "blue"];
colors.forEach((arr)=>console.log(arr));

//forEach with index has three parameters(current element,index of current element,original array)
//example
const fruits=["apple","mango","orange","pear"];
fruits.forEach((current,index)=>{
    console.log(index,current);  
});

//Example with all three parameters
let numbers = [10, 20, 30];
numbers.forEach((current,index,arr)=>{
    console.log("element:"+current);
    console.log("index:"+index);
    console.log("array:"+arr);
});

//forEach does not returns a new array
const num=[1,2,3];
const result=num.forEach((num)=>{
    return num*2;
});
console.log(result);  //undefined



