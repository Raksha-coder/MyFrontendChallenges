//check if number is prime or not


function checkPrime(){
  return function cal(num){
    let flag = 0;
      for(let i = 2 ;i<num/2;i++){
          if(num%i == 0){
            flag++;
            return "not prime";
          }
      }
      if(flag == 0){
        return "prime";
      }
  }
}


let result = checkPrime();
console.log(result(2));