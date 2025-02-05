/*
write a js program to get the largest
even number from an array of integer
*/

const findEven = (arr => arr.filter(n => n%2 == 0));
const largestEvenNum = (arr => Math.max(...arr));
console.log(largestEvenNum(findEven([7,5,6,2,8,9,4])));
