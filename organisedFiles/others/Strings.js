// String is a sequence of characters
let str='Pepcoder'

console.log(str.length);  //length of strings

//METHODS IN STRING
//1.Slice   slice(start,end+1)
let slicedstr=str.slice(3,7);
console.log(slicedstr)

//2.substr
//substr(startIdx,length)

let substring=str.substr(3,4)
console.log(substring);

//3.replacing part of string
// replace(valueToBeReplaced , valuetOBe Replaced with)

let sayhello='hello Akash'
console.log(sayhello);

let saybye=sayhello.replace('hello','Bye')
console.log(saybye);

//concatenation
// concat()
let firststring='hello';
let secondstring='akash'
let concatenatedStr=firststring.concat(" ",secondstring);
console.log(concatenatedStr);

// trim-to remove white spaces

let text='     hello      ';
console.log(text);

let trimmedtext=text.trim();
console.log(trimmedtext)