var fs = require('fs');

fs.readFile('dat',(error, data)=>{
  if(error){
    throw error;
  }
  else{
    console.log(data.toString());
  }
});

process.on("uncaughtException", (error)=>{
  console.log("Unexpected error was caught");
});
