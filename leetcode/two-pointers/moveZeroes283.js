const moveZeroes = (nums) => {
  let zeros = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      zeros++;
    } else {
      nums[index] = nums[i];
      index++;
    }
  }
  while(zeros) nums[zeros--] = 0;
  return nums;
}