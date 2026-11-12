const fs=require("fs");

//Sync...
// fs.writeFileSync("./test.txt",'Hey there!');

//async
// fs.writeFile("./test.txt","Hello world async",(err)=>{});
// fs.writeFile("./contacts.txt","+911111",(err)=>{});

//reading file sync
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);


//async
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt",`${Date.now()}hey there\n`);
fs.appendFile("./contacts.txt","thats my number",(err,res)=>{
if(err){
    console.log(err);
}else{
    console.log(res);
}
})

// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");


// const res=fs.openSync("./contacts.txt","r");
// console.log(res);

// fs.open("./contacts.txt","w",(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })


// fs.mkdirSync("my-docs"); //creates folder