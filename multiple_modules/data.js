var values = (arr) =>{
  return("There are "+arr.length+" elements in the given array");
};

var add = (a, b)=>{
  return(`The sum of given digits is ${a+b}`);
};

/*
  Since we have two modules here (values and add) we have to pass both the modules as objects.
*/

module.exports = {
  values:values,
  add:add
}
