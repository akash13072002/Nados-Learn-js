function placeOrder(drink){
    return new Promise(function(resolve,reject){
     if (drink=="coffee"){
        resolve('order for coffee placed')
     }
     else{
        reject('order cannot be placed')
     }

    })
}
  
function processOrder(order){
    return new Promise(function(resolve){
        resolve(`${order} and served`)
    })
}

//promisified solution

// placeOrder('coffee').then(function(orderstatus){
//     console.log(orderstatus)
//     let orderisProcessed=processOrder(orderstatus)
//         return orderisProcessedKsh   
// }).then(function(servedorder){
//     console.log(servedorder)

// }).catch(function(orderstatus){
//     console.log(orderstatus) 
// })

//  async await solution
//asunc await hmesha ek function ke sath lgta h


async function serveOrder(){
try{
    let orderStatus=await placeOrder('coffee')
    console.log(orderStatus)
    let processedOrder=await processOrder(orderStatus)
    console.log(processedOrder)

}
catch(error){
console.log(error)
}


}
serveOrder()













































