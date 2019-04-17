//In this program we are building a server in our local machine

var http = require('http');//We are importing the Node Js core module 'http' in variable http

var server = http.createServer((req,res)=>{//createServer function is used to create the server
  res.writeHead(200, 'text-plain');
  res.end("Welcome to Node Js");
});

server.listen(3000, ()=>{//listen function is used to tell about the location of our server, in this case the location is localhost:3000
  console.log("Server has been started...");
});
