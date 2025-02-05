
//find factorial

function factorial(num){
    let fac = 1;
    for(i = num;i >1;i--){
      fac *= i;
    };
    return fac;
}

console.log(factorial(4));
