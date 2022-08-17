const fs=require('fs')

fs.readFile('f1.txt',cb)

function cb(err,data){
    if(err){
        console.log(err);
    }
    
  //      console.log('File Data-> '+ data )
    
}

let readFilePromises=fs.promises.readFile('f1.txt')  //pending state

console.log(readFilePromises)


//fulfilled state
readFilePromises.then(function(data){
    console.log('This is f1 data -> ' + data)
})

//rejected state
readFilePromises.catch(function(err){
    console.log(err)
})