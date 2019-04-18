//In this program we are invoking the events() 

var events = require('events');// Here we are importing the core module 'events' of Node JS
var emitter = new events.EventEmitter();// Here we are creating an object for EventEmitter function of event

emitter.on('addUser', (fname, lname)=>{// Here we are using '.on' listener which will listen to an event and give an call back function
  console.log("User "+fname+" "+lname+" is added");
});

emitter.emit('addUser', 'Ankit', 'Kumar');// Here we are passing the arguements and the name of the event 'addUser'
