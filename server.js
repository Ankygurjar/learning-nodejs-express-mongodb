var http = require('http');

var server = http.createServer((req,res)=>{
  res.writeHead(200, 'text-plain');
  res.end("Welcome to Node Js");
});

server.listen(3000, ()=>{
  console.log("Server has been started...");
});
