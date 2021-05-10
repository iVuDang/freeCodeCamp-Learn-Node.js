const { ifError } = require('assert');
const fs = require ('fs');

// fs.mkdir('tutorialFolder',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         fs.writeFile('./tutorialFolder/example.txt','data inside file',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('successfully created file')
//             })
//         })
    
/*
    * mkdir = make directory or folder
    * 
    * 
*/

// fs.unlink('./tutorialFolder/example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else 
//         fs.rmdir('tutorialFolder',(err)=>{
//             if(err)
//                 console.log(err);
//             else 
//                 console.log('deleted folder');
//         })
// })


fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/' + file,(err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('successfully deleted');
                }
            })
        }
    }
});

// Deletes files a.txt and b.txt in our folder 'example' 