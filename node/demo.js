
// file handling in node js
const fs=require('fs')
const path=require('path')
//1. file ko read kaise kre(Reading a file)

//let content=fs.readFileSync('f1.txt')
//console.log('Data of file 1 =>'+content)
// console.log(content.toString())

//2.Writing into a file
//writeToFileSync

//fs.writeFileSync('f2.txt','This data will be written on f2 file')
//fs.writeFileSync('f3.txt','This data will be written on f3 file')

//3. append or update

//fs.appendFileSync('f2.txt', 'This is updated data');

//4. Delete

//unlinkSync

//fs.unlinkSync('f1.txt')
//console.log('file deleted')  

//DIRECTORIES OR FOLDER

//creation of a directory

// fs.mkdirSync('myDirectory')
// console.log('directory created')

//Delete a directory
// fs.rmdirSync('myDirectory');
// console.log('Directory deleted')


// exists sync
let doesexist=fs.existsSync('f1.txt')
console.log(doesexist)

//read directory sync
// always use double slash while you give the path.
//let folderContent=fs.readdirSync('C:\\Users\\AAKASH\\AppData\\Local\\Programs\\Python\\Python310')
//console.log(folderContent)

// coping a file from one folder  to another

let srcDirpath='C:\\Users\\AAKASH\\OneDrive\\Desktop\\learn js\\node\\f2.txt'

let destinationfolderpath='C:\\Users\\AAKASH\\OneDrive\\Desktop\\learn js\\myDirectory\\'

let toBeCopiedFile=path.basename(srcDirpath)
console.log(toBeCopiedFile)

let destpathcomplete=path.join(destinationfolderpath,toBeCopiedFile)


fs.copyFileSync(srcDirpath,destpathcomplete)
console.log('file copied')

fs.unlinkSync(srcDirpath)
