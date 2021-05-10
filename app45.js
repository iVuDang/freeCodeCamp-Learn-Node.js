const fs = require ('fs');

fs.mkdir('tutorialFolder',(err)=>{
    if(err)
        console.log(err);
    else
        fs.writeFile('./tutorialFolder/example.txt','data inside file',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('successfully created file')
            })
        })
    



/*
    * mkdir = make directory or folder
    * 
    * 
*/