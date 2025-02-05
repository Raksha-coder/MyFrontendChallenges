//write a js function that  checks if a number is even or odd and logs the result.


function calculate(){
  return function oddOrEven(num){
    if(num%2 == 0){
      return 1;
    }else{
      return 0;
    }
}
}




let cal = calculate();
console.log(cal(7));