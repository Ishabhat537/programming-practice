
const fs=require("fs");
const requestHandler = (req, res) => {
  if(req.url==='/'){

  
    res.write("<html>");
    res.write("<head><title>main server</title></head>");
    res.write("<body><h1>Enter your details!</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" placeholder="enter name" name="username"> <br>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female"/>');
    res.write('<input type="submit"  value="Submit"/>');

    res.write("</form>");
    res.write("</body>");
    res.write("</html");
    return res.end();
}else if(req.url.toLowerCase()==='/submit-details' && req.method=='POST'){
    ///////////////////////////////
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on("end",()=>{
       const fullBody= Buffer.concat(body).toString();
       console.log(fullBody);
       //parsing
      const params= new URLSearchParams(fullBody);
    //   const bodyObject={};
    //   for(const [key,value] of params.entries()){
    //     bodyObject[key]=value;
    //   }
    //or
    const bodyObject=Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));

    })
  
    // fs.writeFileSync('user.txt','isha Bhat');
    res.statusCode=302; //means redirect
    res.setHeader('location','/');
    return res.end();
}
}

module.exports=requestHandler;

