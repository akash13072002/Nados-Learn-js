console.warn('this is a warning');
//let score =50;
//console.log(score);

console.log(typeof name);

const s='Akash Singwal';
console.log(s.split(''));
console.log(s.length);

let age2=20;
let name1='Akash';
console.log('My name is ' + name1 + ' and age is '+ age2);
console.log(typeof age);   //gives data type of variable


                           // STRINGS
                    
 let a='HeLlo World!';
 console.log(a.length);   //gives length of string  
 console.log(a.split(''));  // splits string 
 console.log(a.toUpperCase());   
 console.log(a.toLowerCase()); 
 console.log(a.substring(0,7));   //starts with 0 ends with             

                           // ARRAYS

/* multi line comments

*/
// Arrays-variables that hold multiple values

const numbers=new Array(1,2,3,4,5);   // new is the constructor
console.log(numbers);

const fruits=['apples','Mangoes',10,true];
//typescript if we want to access some items of the array
console.log(fruits[1]); 
console.log(fruits);

fruits[7]='orange';
console.log(fruits);

fruits.push('graphes');     //push will insert at the end of array
console.log(fruits);   

fruits.unshift('watermelon');  //unshift will insert at the starting of the array
console.log(fruits); 

fruits.pop(); //pop will remove last element of the array
console.log(fruits);

console.log(fruits.indexOf('orange'));

   

 const person={
     firstName:'Akash',
     lastName:'Singwal',
     age:20,
     hobbies:['cricket','chess','volleyball'],
     address:{
         street:26,
         city:'faridabad',
         state:'haryana'
     }

 }
 console.log(person);

 // DE STRUCTURING

 const{firstName,lastName}=person;
 console.log( firstName);

 person.email='akashsingwal35@gmail.com';
 console.log(person);

               // ARRAYS OF OBJECTS

 const todos=[
     {
         id:1,
         text:'take out trash',
         iscompleted:true
     },
     {
        id:2,
        text:'meeting',
        iscompleted:true
    } ,
     {
        id:3,
        text:'Dentist appoiment',
        iscompleted:false
    }
 ] ;           
 console.log(todos);

 //if we want to access meeting from id 2
 console.log(todos[1].text);

// convert todos to json Format

const todosJSON=JSON.stringify(todos);
console.log(todosJSON);

 // WHILE LOOP
 
 let i=0;
 while(i<10){
     console.log('WHILE LOOP NUMBER:' +i);
     i++;
 }

      // FOR LOOPS

for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
} 

// better way of calling

for(let m of todos){
    console.log(m.text);
}

    // HIGH ORDER OF ITERATION.EFFIECIENT WAY
    //forEach , map , filter,
   
    todos.forEach(function(todo){
        console.log(todo.id);  
    });
 
       //map
 /* const todo1text=todos.map (function(todo){
       return todo.text; 
    });
   console.log(todo1text);
   */
   
                 // FILTER

   const todocomnpleted=todos.filter(function(todo){
       return todo.iscompleted==true;
   })
   .map(function(todo){
       return todo.text;
   })
   console.log(todocomnpleted);    
   
                 // conditinal statement
   // IF ELSE 

const x=93;
const y=10
if(x>5 || y>10){
    console.log('x is 10');
}     
else if(x>10){
    console.log('x is greater than 10');
}
else{
    console.log('x is less than 10');
}            
   
const a1=10;
const color=a1>10 ? 'red':'blue';          // ? is a ternary opeartor which means then
console.log(color); 

switch(color){
    case'red':
    console.log('color is blue');
    case'blue':
        console.log('color is blue');
}

     // FUNCTIONS
// function addNums(num1,num2){
//     console.log(num1+num2);
// }    
// addNums(1,2); 

    // Constructor function
function person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}

   // Instantiate object
   const person1=new person('john','singh','4-3-2000');
console.log(person1);

     // CLASS
 
class person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
    }
}     

