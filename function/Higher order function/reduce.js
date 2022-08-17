// sum of array 
 
 const arr=[1,2,3,4,5,6,7,8,9,10]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//      sum += arr[i];
// }
// console.log(sum)

let sumOfArry=arr.reduce(function(sum,value){
 let updatedSum=sum+value;  
 return updatedSum;   
},0        // this zero initialises sum
)
console.log(sumOfArry)

let productOfArray=arr.reduce(function(product,value){
     let updatedproduct=product*value;  
     return updatedproduct;   
    },1        // this 1 initialises product=1
    )
    console.log(productOfArray)