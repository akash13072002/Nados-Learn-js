// HEAP MEMORY EXAMPLE

let firstPerson = {
    name: 'Adam',
    age: 23,
    address: {
        country: 'India',
        city: {
            cityname: 'delhi',
            pincode: 121111
        }
    },
    test: {
        value: 2

    }
}


//let secondPerson = { ...firstPerson, address: { ...firstPerson.address } }           //  ...=spread opeartor(three dot is a spread operator)


// firstPerson.address.country='USA'

let secondperson={...firstPerson}  //Shallow copy
let thirdperson=JSON.parse(JSON.stringify(firstPerson))  //     Deep Copy

firstPerson.address.city.pincode='87654321'

console.log(firstPerson)
console.log(secondperson)
console.log(thirdperson)