//creating an array

// const arr1=new Array(5);
// const arr2=Array(5);
// const arr3=[];

const arr1=Array(5); //creates an array of length 5
const arr2=[5]; //has one elemnt 5 in an array
//populating an array
const color=[];
color[0]="red";
color[1]="blue";
console.log(color);

//or
const color2=["red","blue"];


//example
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length=2;
console.log(cats); //return ist two elements

cats.length=0;
console.log(cats);  //empty array
