//sum of all even number 

function sumOfEvenNumbers(num){
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if(i%2 == 0){
      sum += i;
    }
  }
  return sum;
}

let sumofnum = sumOfEvenNumbers(7);
console.log(`sum of all even num is : ${sumofnum}`);
