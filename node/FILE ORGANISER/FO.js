// we will be creating a file system organiser
//features of the project


// let firstNumber=process.argv[2]
// let secondNumber=process.argv[3]
// console.log(Number(firstNumber)+Number(secondNumber))
const fs = require('fs');

const path = require('path')

const organizewalifile =require('./commands/organize')
let inputArr = process.argv.slice(2)
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
       
              "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


// console.log(inputArr)
let command = inputArr[0]
// console.log(inputArr)

switch (command) {
    case "tree":
        treefn(inputArr[1])
    case "organize":
        organizewalifile.organizeFnkey(inputArr[1]);
        break;
    case "help":
        console.log("help command will be executed");
        break;
    default:
        console.log("NO command will be executed")
        break;
}

function treefn(dirpath)
{
    if(dirpath==undefined){
        console.log('Please enter a valid directory path')
    }
    else{
        let doesExist=fs.existsSync(dirpath)

        if(doesExist==true){
            treeHelper(dirpath,' ')
        }
    }
}
function treeHelper(targetPath,indent){
     let checkforfile=fs.statSync(targetPath).isFile()


     if(checkforfile==true){
         let filename=path.basename(targetPath)
         console.log(indent +'|---'+ filename)
         
     }
     else{
         let dirName=path.basename(targetPath)
         console.log(indent+ '|____'+ dirName)
        
         let childrenArr=fs.readdirSync(targetPath)
         
    

         for(let i=0;i<childrenArr.length;i++){
            let childPath=path.join(targetPath,childrenArr[i])

            treeHelper(childPath,indent+'\t')
         }
        }
     



    }

