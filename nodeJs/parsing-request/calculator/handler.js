const {sumReqHandler}=require("./value");
const reqHandler=(req,res)=>{
console.log(req.url,req.method);
if(req.url==='/'){

    res.write(`
        <html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Welcome to Calculator!</h1>
    <a href="/calculator">Go to Calculator</a>
</body>
</html>
   `);
 return  res.end();

}else if(req.url.toLowerCase()==='/calculator'){

       res.write(`
        <html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Do Maths here</h1>
    <form action="/calculate-result" method="POST">
   <input type="text" name="first" />
   <input type="text" name="second"/>
   <input type="submit" value="sum"/>
   </form>
</body>
</html>
   `);
 return  res.end();

}else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
           
  return sumReqHandler(req,res);



}else{
           res.write(`
        <html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Not Found!</h1>
 
</body>
</html>
   `);
 return  res.end();

}
}

exports.reqHandler=reqHandler;