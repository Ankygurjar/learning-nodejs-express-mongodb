//In this program we are focusing on how to use a file in an another file (app.js)

var count = (arr) =>{
  return("There are "+arr.length+" elements in the given array.");
}

module.exports = count; //In order to use this function in some other file we have to first export it using "module.exports".
