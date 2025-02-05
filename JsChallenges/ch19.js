/*
Given two numbers, write a js program to find out which 
one is nearest to 100
*/

const isnearToHundread = (num1,num2) => 
  (100-num1) < (100-num2)? num1 : num2;

console.log(isnearToHundread(80,60));
