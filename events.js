var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('addUser', (fname, lname)=>{
  console.log("User "+fname+" "+lname+" is added");
});

emitter.emit('addUser', 'Ankit', 'Kumar');
