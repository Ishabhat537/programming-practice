const story=document.querySelector(".story");
const button1=document.querySelector("#set-text");
const button2=document.querySelector("#clear-text");

button1.addEventListener("click",()=>{
    story.textContent="Hi,i am isha!";
    console.log(story);
});

button2.addEventListener("click",()=>{
    story.textContent="";
});