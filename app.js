const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "X-Custom-Header": "Custom header",
    });
    res.end("<h1>Welcome to the server!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "X-Custom-Header": "Custom header",
    });
    res.end("<h1>About Us</h1>\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "X-Custom-Header": "Custom header",
    });
    res.end("<h1>Contact Us</h1>\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
