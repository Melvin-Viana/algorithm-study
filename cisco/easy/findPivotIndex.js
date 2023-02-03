var pivotIndex = function(nums) {
  const n = nums.length;
  const leftSum = new Array(n);
  const rightSum = new Array(n)
  // Add up sums from the left
  leftSum[0] = 0;
  for (let i = 1; i < nums.length; i++) {
      leftSum[i] = leftSum[i-1]  + nums[i-1];
  }
  let rightSum = 0;
  for (let i = n -2; i >= 0; i--) {
      rightSum+= nums[i+1];
      if(leftSum === rightSum) return i-1;
  }
  for (let i = 0; i < nums.length; i++) {
      if(leftSum[i] === rightSum[i]) return i;
  }
  return -1;
};