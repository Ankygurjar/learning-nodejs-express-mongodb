//In this program we will fetch the data in file 'data' asynchronously using calback Function

var fs = require('fs');// Here we are exporting the core modul 'File Stream'

fs.readFile('data',(err, data)=>{// Here we are reading the file 'data' using readFile() method and also calling a callback function.
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());//We need to use toString() function in order to acess the file properly.
  }
});

console.log("This is outside the function");
