// async function fetchApi(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data= await response.json();
//     console.log(data);
// }

// fetchApi();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url="https://jsonplaceholder.typicode.com/posts";
const options={
   method: "POST",
  body: JSON.stringify({ username: "isha bhat" }),
  headers: myHeaders,
}

async function postData(){
  const response=await fetch(url,options);
  const data=await response.json();
  console.log("post data:",data);
}

async function getData(){
  const response=await fetch(url);
  const data=await response.json();
  console.log("get data:",data);
}

async function processData(){
  await postData();
  await getData();

}
processData();
 