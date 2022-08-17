let arr=[1,4,7,9,8]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])}
// }

// console.log(arr)

let evenNoArr=arr.filter(function(n){
    return n%2==0;
})
console.log(evenNoArr)


