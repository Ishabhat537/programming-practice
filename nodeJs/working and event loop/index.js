const fs=require('fs');
const crypto=require("crypto");
const start=Date.now();
process.env.UV_THREADPOOL_SIZE=2  //controls thread pool size
setTimeout(()=>console.log("hello from timeout"),0);  //2
setImmediate(()=>console.log("hello immediate")); //4 

fs.readFile("./text.txt","utf-8",()=>{  //3
    console.log("io polling finish");  //depends on file size 
    setTimeout(()=>console.log("second"),0);//6
     setTimeout(()=>console.log("third"),3000);//7
     setImmediate(()=>console.log("immediate 2"));  //5


     //cpu intensive
     crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}`,'password 1 done')
     });
      crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}`,'password 1 done')
     });
      crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}`,'password 1 done')
     });
      crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}`,'password 1 done')
     });
      crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{    //will take moore time because new threads assignment starts as 4 threads per time
        console.log(`${Date.now()-start}`,'password 1 done')
     });

})
console.log("hello world");   //1