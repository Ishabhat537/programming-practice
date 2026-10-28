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
let i=0;
while(i<6){
    console.log("inside the loop");
    if(i==3){
        i++;
        continue;
    }
    console.log(i);
    i++;

}

//do-while loop  (dowhile loop has atleast one guaranteed iteration i.e. first one becasue no condition is checked in first iteration)
// let i=1;
// do{
//     console.log(i);
//     i++;

// }while(i<=5);
