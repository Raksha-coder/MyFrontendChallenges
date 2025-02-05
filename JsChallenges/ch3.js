//FizzBuzz in js
//print number from 1 to 100 but based on below condition.
//1. Multiplies of 3, print "Fizz" instead of the number
//2.multiplies of 5, print "Buzz"
//3. for numbers which are multiple of both 3 and 5 , print FizzBuzz.

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
