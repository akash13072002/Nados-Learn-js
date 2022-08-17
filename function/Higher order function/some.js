const transaction=[1000,2000,30000,-444,899]

let anydeposit=transaction.some(function(n){
    return n<0
})
// "some" will return only true and false. it will  return true if one or more thgan one condities are satisfied
console.log(anydeposit)