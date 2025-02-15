/*
write a js function to convert an amount to coins.
example : 46 => possible coins 10,5,2,1

output : 10,10,10,10,5,1
*/


const getCoins = (num,possibleCoins = [10,5,2,1]) => {
        let totalCoins = [];
        possibleCoins.forEach((n)=>{
          if(num >=1){
            let den =Math.floor(num/n); 
            for(let i=1;i<=den;i++){
              totalCoins.push(n);
            }
            num = num%n; 
          }
        });
        return totalCoins;
};

console.log(getCoins(47));
