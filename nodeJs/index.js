const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
    // console.log(req.headers);
    // console.log(req);
    const log=`${Date.now()}:${req.url}: new req received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
         switch(req.url){
            case '/':res.end("HomePage");
            break;
            case '/about':res.end("i am isha");
            break;
            default:res.end("404 not found");
         }
    })
   
});
myServer.listen(8080,()=>{
    console.log("listening to port 8080");
})