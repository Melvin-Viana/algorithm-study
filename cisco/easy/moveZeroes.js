const moveZeroes = nums => {

  let nonZeroes = 0;
  for (let num of nums) if(num) nums[nonZeroes++] = num;

  let end = nums.length ;
  while(nonZeroes < end) nums[nonZeroes++] = 0
}