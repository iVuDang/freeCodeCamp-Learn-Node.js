const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, 
                                    output: process.stdout}); 

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1); 
let answer = num1 + num2; 


rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    } else {
        rl.setPrompt('Incorrect response, please try again\n')
        rl.prompt();

        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer)
            rl.close();
            else {
                rl.setPrompt(`Your answer of ${ userInput } is incorrect, try again \n`);
            }
        })
    }
});

/*
    * ctrl + c, to break out 
    * .trim() to remove trailing white spaces
    * rl.close() will automatically 'ctrl + c' if our input == answer
    * \n breaks into a new line, used within string quotations `` or '' 
*/ 


// Message to show if we got correct answer
rl.on('close',()=>{
    console.log('Correct!');
});

/*
    * Line 13, node app22 => 
        What is 10 + 8?
        18
        Correct!


    * Line 17, node app22 => 
        What is 6 + 8?
        4
        Incorrect response, please try again


    * Line 18, node app22 => 
        What is 5 + 8?
        12
        Incorrect response, please try again
        13
        Correct!

*/