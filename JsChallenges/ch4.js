//find the factors of a given number

//check factor of any number in it;s below number 
//like for 5 check table number from 1 to 5

//2 * 3 = 6
//6 * 1 = 6
function findFactors(num){
  let uniqueArray = [];
    for(let i= 0;i<=num;i++){
      if(num%i == 0){
          uniqueArray.push(i);
      }
    }

    return uniqueArray;
}

let values = findFactors(18);
console.log(...values);
console.log(values.join(","));
