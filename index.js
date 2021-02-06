const http = require("http");

const requestListner = (req, res) => {
  res.writeHead(200);
  res.end("Hello World from Node server");
};

const app = http.createServer(requestListner);

app.listen(3500);
