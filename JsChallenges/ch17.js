/*
write a js program to extra the first half of a string 
of even length
*/
const extractString = (str) =>
     (str.length%2 == 0) ? str.slice(0,(str.length/2)) :str;

console.log(extractString("temp"));
