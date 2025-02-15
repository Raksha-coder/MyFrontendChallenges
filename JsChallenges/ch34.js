/*
write a js function to extract unique 
characters from a string means no dublicate 
 */

const getUniqueChar = (str) =>{
    let uniqueChar = [];
    str.split('').forEach(char => {
        if(uniqueChar && !uniqueChar.includes(char)){
          uniqueChar.push(char);
        }
    });
    console.log(uniqueChar);
}

getUniqueChar("kkkkkklllllllllllpppppppp");

//approach 2
const getUniqueChars = (str) => [...new Set(str.split(''))];
console.log(getUniqueChars("kkkkkklllllllllllpppppppp"));








