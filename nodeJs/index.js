const http=require("http");
const fs=require("fs");
const url=require("url");
const myServer=http.createServer((req,res)=>{
    // console.log(req.headers);
    // console.log(req);
    if(req.url==='/favicon.ico') return res.end();
    const log=`${Date.now()}:${req.url}: new req received\n`;
    const myUrl=url.parse(req.url,true);  //imp
    console.log(myUrl);
  
    fs.appendFile('log.txt',log,(err,data)=>{
         switch(myUrl.pathname){
            case '/':res.end("HomePage");
            break;
            case '/about':
            const username=`hi,${myUrl.query.myName}`;    
            res.end(username);
            break;
            case '/search':
                const search=myUrl.query.search_query;
                res.end("here are your results:"+search);
                break;
            default:res.end("404 not found");
         }
    })
   
});
myServer.listen(8080,()=>{
    console.log("listening to port 8080");
})