const http = require("http");
const static = require("node-static");

const hostname = "127.0.0.1";
const port = 3500;

const file = new static.Server("./public");

const requestListner = (req, res) => {
  file.serve(req, res);
  console.log("Getting => ", req.url);
};

const app = http.createServer(requestListner).listen(port, hostname, () => {
  console.log(`server is up on PORT: ${port}`);
});
