/*
Write a js function that accepts a
string as a parameter and counts the 
number of vowels within the string .
*/

const countVowels = (str) =>
{
  let count = 0;
    str.split('').forEach(x =>{
      if(['a','e','i','o','u'].includes(x.toLowerCase())){
        count++;
      }
    });
  return count;
}

console.log(countVowels("Raksha"));


//2nd approach
const  countLetters = (str,letters = ['a','e','i','o','u']) =>
    str
      .split('')
      .filter(s => letters.indexOf(s) > -1)
      .length;

console.log(countLetters('abcde'));
console.log(countLetters('aei'));


