//FOR LOOP

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=0;i<=5;i++){
//     if(i==4){
//         break;
//     }
//     if(i==0){
//         continue;
//     }
//     console.log(i);
// }




//WHILE LOOP

// let i=0;
// while(i<6){
//     console.log(i);
//     i++;
// }
// let i=0;
// while(i<6){
//     console.log("inside the loop");
//     if(i==3){
//         continue;
//     }
//     console.log(i);     ///running infinitely
//     i++;
// }

//solution
//let i=0;
// while(i<6){
//     console.log("inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;

// }

//do-while loop  (dowhile loop has atleast one guaranteed iteration i.e. first one becasue no condition is checked in first iteration)
// let i=1;
// do{
//     console.log(i);
//     i++;

// }while(i<=5);



//for...in and for...of loops
const arr=[3,5,7];
for(const i in arr){
    console.log(i); //0,1,2
}
for(const i of arr){
    console.log(i);  //3,5,7
}
//we cannot use for of loop directly on objects but can use object.entries,object,keys,object.values instead
const obj={
    name:"isha",
    age:21
}
for(let value of Object.entries(obj)){
    console.log(value);
}

//label statement example
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue ;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }
