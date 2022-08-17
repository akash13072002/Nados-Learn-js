let myPromise= new Promise(function(resolve,reject){
const a=7
const b=4

if(a==b){
    resolve('Yes both are equal')
}
else{
    reject('They are not same')
}
})

myPromise.then(function(result){
    console.log(result)
})

myPromise.catch(function(result){
    console.log(result)
})



    

// 1,lines are the syntax to create a promise