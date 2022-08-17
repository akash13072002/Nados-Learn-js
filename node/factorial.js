// BASIC APPROACH

// function fact(n){
//     let ans=1;
//     if(n==0 || n==1){
//         return 1;
//     }
//     else{
//       for(let i=n; i>=1; i--){
//           ans=ans*i;
//       }
//       return ans;
//     }
// }

// let factorial=fact(5)
// console.log(factorial);

                  //  USING RECURSION=a function or method calling itself until the edge case is reached

function fact(n){
    // base case
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
let factorial=fact(5)
console.log(factorial);
