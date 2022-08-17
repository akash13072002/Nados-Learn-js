let transactions=[1000,1100,-987,7897,9000]

let firstwithdrawl= transactions.find(function(n){
    return n<0
})
console.log(firstwithdrawl)