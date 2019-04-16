var values = (arr) =>{
  return("There are "+arr.length+" elements in the given array");
};

var add = (a, b)=>{
  return(`The sum of given digits is ${a+b}`);
};

module.exports.values = values; //Here we are passing 'values' module through module.exports.values.
module.exports.add = add; //Here we are passing 'add' module through module.exports.add.
