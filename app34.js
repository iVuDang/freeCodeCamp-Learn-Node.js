const fs = require('fs');
// create a file

// fs.writeFile('example.txt',"this is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else 
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
// }); 


/*
    * Created new file called 'example.txt' in our folder, inside the file has the text 'this is an example
    
    * fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
        * syntax: name of file, contents of file, call back function
    
    * fs.readFile() method is used to read files on your computer.
        * syntax: name of file, encoding, call back function
        
    * Highlighting all, and 'contol + /' will comment out the highlighted coding lines


*/

fs.rename('example.txt','newFileName.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');
});