//Armstrong 
// 153 = 1(cube) + 5(cube) + 3(cube)

function findArmstrong(n){
  let armStrong = 0;
    while(n > 0){
      let rem = n%10;
      armStrong = armStrong + (rem*rem*rem);
      n = Math.floor(n/10); 
    }
    return armStrong;
}

let result = findArmstrong(153);
console.log(result);
