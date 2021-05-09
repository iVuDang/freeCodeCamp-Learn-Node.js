const EventEmitter = require('events'); 
const eventEmitter = new EventEmitter(); 


eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2); 
});
// parameters should not have spaces otherwise NaN result


eventEmitter.emit('tutorial',1,2);
// node app14 => 3

// .emit is a method
// Emit's job is to trigger named event(s) which in turn cause functions called listeners to be called