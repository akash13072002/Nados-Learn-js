// var a='pepcoding'
// console.log(a)

// function test(){
//     var a=2
//     console.log(a)
// }
// test()   // function invokation
// // console.log(a)   // this is not allowed because var is function scoped

// if(true){
//     var b=4
//     console.log(b)
// }

// // console.log(b) //downside of using var

// const a=2;

// console.log(a);
// const a=6        //no redeclaration

// console.log(a);
// a='pepcoding'     // no re-assign

// console.log(a);

    
//                 //ARRAYS 
//                 // ARRAYS DECLARATION

//                 let arr=[]
// arr=[1,2,3,4,'pepcoding',true,12.3,'a']
// console.log(arr)
// arr[3]='akash'
// console.log(arr)    

// const test=arr[4]
// console.log(test)

// arr.push('singwal')
// console.log(arr) 
// arr.pop()
// console.log(arr) 
// arr.unshift('qwerty')
// console.log(arr) 
// arr.shift()
// console.log(arr) 


                      // OBJECTS-in JS an object is a collection of data in key value pair.
let obj={}    //declaration

// let object={
//     name: 'Akash',
//     age:20,
//     gender:'male'
// }
// console.log(object)

let captainAmerica={
    name:'steve roger',
    age:102,
    friends:['bucky','Banner','thor','tony'],
    address:{
    country:'USA',
    state:'New York',
    city:{
        cityname:'Manhatton',
        pincode:123456
    }
},
    isAvenger:true
    }
    console.log(captainAmerica)

      // Accessing properties of an object

    // dot notaion(.)

    let ageofCaptain=captainAmerica.age
    console.log(captainAmerica.address.city.cityname)


    // changing the value of object captainAmeica

    // captainAmerica.isAvenger=false
    // console.log(captainAmerica)

    // // delete a key from object
    // delete captainAmerica.age
    // console.log(captainAmerica)