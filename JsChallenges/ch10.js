//Palindrome
//121 reverse it 121 = same right,it's called palindrome

function Palindrome(num){
  let reverse = 0;
      while(num >0){
        let rem = num%10;
        reverse = (reverse*10) + rem;
        num = Math.floor(num/10);
      }

      return reverse;
}

let num = 234;
let result = Palindrome(num);
console.log(result == num);
