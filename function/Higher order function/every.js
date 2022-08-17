const transaction=[1000,2000,30000,-444,899]

let anydeposit=transaction.every(function(n){
    return n>0
})
// "every" will return only true and false it will only return true if all the condities are satisfied
console.log(anydeposit)