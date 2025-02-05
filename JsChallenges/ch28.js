/*
write a js program to convert a comma-separated value
string to a 2D array.A new line indicates a new row 
in the array.

example :
abc,def,ghi []
jkl,mno,pqr []
stu,vwx,yza []

*/

const str = `abc,def,ghi 
jkl,mno,pqr 
stu,vwx,yza`;

let parseString = str.split("\n").map(val=> val.split(","));
console.log(parseString);

// o/p : 
// [
//   [ 'abc', 'def', 'ghi' ],
//   [ 'jkl', 'mno', 'pqr' ],
//   [ 'stu', 'vwx', 'yza' ]
// ]

