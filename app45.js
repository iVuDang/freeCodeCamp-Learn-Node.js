const fs = require ('fs');
fs.mkdir('tutorialFolder',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('folder successfully created');
    }
})



/*
    * mkdir = make directory or folder

*/