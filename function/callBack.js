//call back-

// function printfirstname(firstName){
//     console.log(firstName)
// }

// function printlastname(lastName){
//     console.log(lastName)
// }

// printfirstname('Akash')
// printlastname('singwal')

                 //   This same code can be written as 

                //  function printfirstname(firstName,cd){
                //     console.log(firstName)
                //     cd('singwal')
                // }
                
                // function printlastname(lastName){
                //     console.log(lastName)
                // }
                
                // printfirstname('Akash',printlastname);

                //
                  
                function printhello(cb){
                    console.log('hello');
                    cb();
                }
                function printbye(){
                    console.log('bye');
                }
              printhello(printbye);
              