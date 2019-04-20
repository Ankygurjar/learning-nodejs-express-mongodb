/*
So far we were just building server using node js with http module. That approach works but was quite lenghty.
To remove such time consuming problem we have a backend framework called Express.js which makes communicating with server
really easy.

To instll express type: npm install --save express
After executing the above command you can see express module in package.json file.
*/

const express = require('express');// Here we are extracting the 'express' module
const app = express();// Here we are adding a object to our express module

app.get('/',(req,res)=>{//This is an example of making a simple get request through express
  res.send("Hello World!!");
});

app.listen(3000,()=>{
  console.log("Server is started...");
});
