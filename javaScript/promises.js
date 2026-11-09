// const promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("promise resolved");
//     }else{
//         reject("promise rejected");
//     }
// });

// promise.then((message)=>{
//     console.log("resolved message is:",message);
// }).catch((error)=>{
//     console.log("rejected message is:",error);
// })



// const promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve(10);
//     }else{
//         reject(-1);
//     }
// });


//promise chaining
// promise.then((message)=>{
//     console.log("first msg:",message);
//     return message*2;
// }).then((message)=>{
//     console.log("second msg:",message);
//     return message*2;
// }).then((message)=>{
//     console.log("third msg is:",message);

// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("i will always run!");
// })

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"first");
// });

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"second");
// })

// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,4000,"third");
// });

// Promise.all([promise1,promise2,promise3])
// .then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// });

console.log("start");
let promise=new Promise((resolve,reject)=>{
    setTimeout(function sayHello(){
        console.log("hi isha")
        resolve("task completed")
    },0);                           //even with 0s delay it is asynchronous
})
promise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})

console.log("end");