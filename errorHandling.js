//In this program we are doing the Error Handling activity asynchrously. Since, Node Js is asynchronous so we cannot use try,catch exception in Node Js

var fs = require('fs');// Here we are imprting the inbuilt 'fs' module of Node Js.

fs.readFile('dat',(error, data)=>{ //Since we have to output the error so we have to make an error, hence I have used an unvalid file name.
  if(error){
    throw error;
  }
  else{
    console.log(data.toString());
  }
});

process.on("uncaughtException", (error)=>{ // Here uncaughtException is playing role as an inbuilt error event
  console.log("Unexpected error was caught");
});
