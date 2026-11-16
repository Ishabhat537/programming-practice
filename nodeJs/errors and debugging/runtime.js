const runtimeErr=()=>{
// console.log(x);   //reference error

// let num=98;
// num();    //type error

let jsonstring="{name:'isha'}";
JSON.parse(jsonstring);



}

module.exports=runtimeErr;