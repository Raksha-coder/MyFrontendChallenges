/* write a js program to generate random 
hexadecimal color code */

const randomVal = ()=> {
  let arr = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]
  let Index = Math.floor(Math.random() * arr.length);
  return arr[Index];
};

const generateHexCode =() => {
     return `#${randomVal()}${randomVal()}${randomVal()}${randomVal()}${randomVal()}${randomVal()}`
}
// console.log(generateHexCode());

//Second Approach
const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);
const getRandomHexColor = () => '#' + Array.from({length:6}).map(getRandomHexNumber).join('');
console.log(getRandomHexColor());
//o/p : #2f4g5g


