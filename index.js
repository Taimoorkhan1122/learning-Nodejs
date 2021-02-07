const http = require("http");
const static = require("node-static");

const hostname = "127.0.0.1";
const port = 3500;

// const { URL } = require("url");
// const myUrl = new URL("/home", "http://localhost:3500");

const file = new static.Server("./code");

const requestListner = (req, res) => {
  file.serve(req, res);
  console.log("Getting => ", req.url);
  // if (req.url === "/home") {
  //   req
  //     .addListener("end", function () {
  //       file.serve(req, res);
  //     })
  //     .resume();
  // }
  // } else if (req.url === "/") {
  //   res.writeHead(200);
  //   res.end("Hello from node server");
  // } else {
  //   res.writeHead(404);
  //   // res.end("no rout found");
  // }
};

const app = http.createServer(requestListner).listen(port, hostname, () => {
  console.log(`server is up on PORT: ${port}`);
});
