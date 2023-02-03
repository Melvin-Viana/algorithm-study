const maximumDifference = (nums) => {
  let max = -1;
  const n = nums.length;
  const dp = Array(n)
  dp[0] = 0;
  // Adding the sums from left to right
  for (let [i, num] of nums.slice(1).entries()) {
    dp[i] = Math.max(nums[i], dp[n-1]);
  }
  // Adding the sums from right to left

  return max || -1;
}