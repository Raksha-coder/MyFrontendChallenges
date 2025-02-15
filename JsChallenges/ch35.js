/*
write a js function to find the first 
not repeated character
example :
input : "abacddbec"
output : 'e'
*/

const firstUniqueChar = (str) =>
  str
  .split('')
  .filter((item,index,arr)=> 
      arr.filter((arrItem)=> arrItem == item).length === 1
  )[0];

console.log(firstUniqueChar("abacddbecfg"));