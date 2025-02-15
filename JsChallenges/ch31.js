/* write a js function that returns a 
passed string with letters in alphebetical 
order

example 
input : 'webmaster'
output :'abeemrstw'
*/

const arrangeStr = (str) => {
  //split the string and get all char code
  let chCode = str.split('').map((ch) => ch.charCodeAt(0));
  // arrange values
  for(let i=0;i<chCode.length-1;i++){
    for(let j= i+1;j<chCode.length;j++){
      if(chCode[i] > chCode[j]){
        let temp = chCode[j];
        chCode[j] = chCode[i];
        chCode[i] = temp;
     }
    }
  }
  //convert back to character and join them 
  return chCode.map((x) => String.fromCharCode(x)).join('');
}

let value = arrangeStr("webmaster");
console.log(value);


//2nd method
const alphebeticalOrder = (str) =>
  str.split('').sort((a,b) => a>b ? 1 : -1)
  .join('');
