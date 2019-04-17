var fs = require('fs');

var data = fs.readFileSync('data');

console.log(data.toString());
console.log("Program is ended");
