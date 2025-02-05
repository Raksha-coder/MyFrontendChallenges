//fibonacci series
function fibo(num){
  let a = 0,b = 1,c;
  let arr = [];
    for(let i=1;i<=num;i++){
      arr.push(a);
      c = a+b;  
      a = b; 
      b = c; 
  }
    return arr;
}

let fibonacci = fibo(6);
