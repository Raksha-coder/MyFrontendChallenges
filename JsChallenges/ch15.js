/*
Write a js program to create a new string adding "New!"
in front of given string.If the given string begins with 
"New!" already then return the original string.
*/

const concatString = (str)=> str.includes("New!") ? str : `New! ${str}` ;
console.log(concatString("Word"));

