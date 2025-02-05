/*
Given a year is leap year or not
*/

const isLeapYear = (yr) => 
  (yr%4 == 0) ? "It is a leap year" : "not a leap year";

console.log(isLeapYear(1990));
