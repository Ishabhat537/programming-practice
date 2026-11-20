const http = require("http");
const url = require("url");
const { fetchPosts, fetchPostById } = require("./fetch");
const server = http.createServer(async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    if (req.url == "/" && req.method == "GET") {
      res.write(`
        <html>
<head>
    <title>Calculator</title>
</head>
<body>
    <h1>Welcome to fetching api!</h1>
    <a href="/posts">posts</a>
</body>
</html>
   `);
      return res.end();
    } else if (req.url == "/posts" && req.method == "GET") {
      res.setHeader("Content-Type", "application/json");
      console.log(req.url);
      const posts = await fetchPosts();
      res.statusCode = 200;
      res.end(JSON.stringify(posts));
    } else if (req.url.startsWith("/posts/") && req.method == "GET") {
      res.setHeader("Content-Type", "application/json");
      const id = req.url.split("/")[2];
      const post = await fetchPostById(id);
      console.log(post);
      res.end(JSON.stringify(post));
    } else {
      res.statusCode = 404;
      res.end(
        JSON.stringify({
          message: "Route not found",
        }),
      );
    }
  } catch (err) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        message: "Internal Server Error",
      }),
    );
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("server listening");
});
