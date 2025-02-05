/*
Write a js program to check two numbers and return true if one of the number
is 100 or if the sum of the two number is 100
*/

function isHundredOrSumHundred(...nums) {
  if (nums.includes(100)) {
    return true;
  } else if (nums[0] + nums[1] == 100) {
    return true;
  } else {
    return false;
  }
}

console.log(isHundredOrSumHundred(50, 20));
