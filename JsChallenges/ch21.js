/*
write a js program to find the number of even digits
in an array of integers.
*/

const findEven = (arr) => arr.filter(n => n%2 == 0).length;
console.log(findEven([7,9,8,7,5,4,3,2]));
console.log(findEven([1,2,3,4,5,6,7,7,8]));


