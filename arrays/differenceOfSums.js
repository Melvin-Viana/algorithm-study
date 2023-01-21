const differenceOfSum = function(nums) {
  let eleSum = 0
  let digSum = 0;
  for (let num of nums) {
      eleSum+= num;
      while (num !== 0) {
          digit = num % 10;
          num = Math.floor(num/10);
          digSum += digit;
      }
  }
  return Math.abs(eleSum - digSum);
};