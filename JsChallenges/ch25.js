/*
write a js program to replace the first digit in a 
string(should contains atleast digit) with $ character
*/

const replaceFirstDigit = (str) => str.replace(/[0-9]/,'$');
console.log(replaceFirstDigit("3Rak5sha"));
