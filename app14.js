const EventEmitter = require('events'); 
const eventEmitter = new EventEmitter(); 


eventEmitter.on('tutorial', ()=>{
    console.log('tutorial event has occurred'); 
});


eventEmitter.emit('tutorial');
// .emit is a method
// Emit's job is to trigger named event(s) which in turn cause functions called listeners to be called