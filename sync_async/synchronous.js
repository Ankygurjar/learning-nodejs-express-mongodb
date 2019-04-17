//In this program we are accessing the data of the file synchronously

var fs = require('fs');//Here we are exporting the core modyle File Stream

var data = fs.readFileSync('data');// Here we are exporting the data in the file and storing in data variable.

console.log(data.toString());// We need to convert the data of the file in order to access the data properly.
console.log("Program is ended");
