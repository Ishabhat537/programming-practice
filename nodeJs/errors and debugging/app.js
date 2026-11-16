const http=require('http');
const syntaxErr=require("./syntax");
const runtimeErr=require("./runtime");
const logical=require("./logical");
const server=http.createServer((req,res)=>{
    // runtimeErr();
    logical();
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server listening to port ${PORT}`);
});