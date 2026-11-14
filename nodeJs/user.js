const http = require("http");
const fs=require("fs");
const server = http.createServer((req, res) => {
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
    fs.writeFileSync('user.txt','isha Bhat');
    res.statusCode=302; //means redirect
    res.setHeader('location','/');
    return res.end();
}
});
server.listen(3000, () => {
  console.log("server listening to port 3000");
});
