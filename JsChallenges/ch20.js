/*
  write a js program to check a given string contains
  2 to 4 occurances of a specified characters.
*/

const findOccurance = (str,char) => 
  str.split('')
  .filter((ch)=> ch === char).length;

const contains2To4 = (str,char)=>
  findOccurance(str,char) >=2 && findOccurance(str,char) <=4 ;

console.log(contains2To4("nxecneienidnei",'n'));
console.log(contains2To4("oooxsmcssoo",'o'));

