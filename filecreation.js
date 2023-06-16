const fs=require('fs');
const path=require('path');
const filePath=path.join(__dirname,'files');

async function fileCreation(){
    try{
        await fs.promises.writeFile(filePath+'/index2.js','message');
     }
     catch(err){
        console.log(err);
     }    
}
fileCreation();