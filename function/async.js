const fs = require('fs')
const path=require('path')

 fs.readFile("f3.txt",cb1);


 // let doesexist=fs.existsSync('./f1.txt')
// console.log(doesexist)


function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("This is file data-> " + data);
    fs.readFile("f2.txt", cb2);
  }}

  function cb2(err,data){
      if(err){
          console.log(err);
      }
      else{
          console.log(""+data)
      }
  }