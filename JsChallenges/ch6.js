//sum of all even number 

function sumOfEvenNumbers(start,end){
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if(i%2 != 0){
      sum += i;
    }
  }
  return sum;
}

let sumofnum = sumOfEvenNumbers(5,20);
console.log(`sum of all odd num is : ${sumofnum}`);
