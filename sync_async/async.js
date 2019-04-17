var fs = require('fs');

fs.readFile('data',(err, data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
});

console.log("This is outside the function");
