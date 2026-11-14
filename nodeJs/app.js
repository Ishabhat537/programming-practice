const http=require("http");
const server=http.createServer((req,res)=>{
//   if(req.url==='/'){
//        res.setHeader("Content-Type","text/html");
//     res.write('<html>');
//     res.write('<head><title>main server</title></head>');
//     res.write('<body><h1>Welcome to Home!</h1></body>');
//     res.write('</html');
//     return res.end();
//   }else if(req.url==='/products'){
//        res.setHeader("Content-Type","text/html");
//     res.write('<html>');
//     res.write('<head><title>main server</title></head>');
//     res.write('<body><h1>Checkout products!</h1></body>');
//     res.write('</html');
//    return  res.end();
//   }else{
//        res.setHeader("Content-Type","text/html");
//     res.write('<html>');
//     res.write('<head><title>main server</title></head>');
//     res.write('<body><h1>Page not found1</h1></body>');
//     res.write('</html');
//     res.end();
//   }




});
server.listen(3000,()=>{
    console.log("server listening to port 3000");
})