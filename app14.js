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


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

// The constructor() method is a special method for creating and initializing objects created within a class.
// The super keyword refers to the parent class. It is used to call the constructor of the parent class and to access the parent's properties and methods.

// Extends keyword is used in class declarations or class expressions to create a class that is a child of another class.

let iVuDang = new Person('iVuDang');

iVuDang.on('name',()=>{
    console.log('my name is ' + iVuDang.name);
});
// The on() method attaches one or more event handlers for the selected elements and child elements.


iVuDang.emit('name');
// node app14 => my name is iVuDang

