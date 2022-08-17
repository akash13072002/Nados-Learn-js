// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.

// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

// Map

//Map is itslef a function.
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that is inside the callback function
//map returns a new array


let arr=[1,2,3,4,5,6]

let sqrArr=arr.map(function(n){
    return n*n
})

console.log(sqrArr);

let nameArr = ["Aniket Raj", "Nayan Jha", "Prashant Pandey"];

// use map method and separted every element according to firstName and lastName

// let modifier=nameArr.map(function(n){
//     let splitter=n.split(" ")
//     return splitter
// })
// console.log(modifier);

const transactions=[1000,3000,4000,2000,-898,3000,-4500]
const inrtousd=74;

let convert=transactions.map(function(n){
    let convert1=n/inrtousd;
   return convert1.toFixed(2)
})
console.log( convert)