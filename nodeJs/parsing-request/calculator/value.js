const sumReqHandler=(req,res)=>{
  const body=[];
  req.on('data',(chunk)=>{
    body.push(chunk);
  });

  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    console.log(bodyStr);
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params);
    console.log(bodyObj);
    const result=Number (bodyObj.first)+Number(bodyObj.second);
    console.log(result);


               res.write(`
        <html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>sum is ${result}</h1>
 
</body>
</html>
   `);
 return  res.end();
  });


}

exports.sumReqHandler=sumReqHandler;