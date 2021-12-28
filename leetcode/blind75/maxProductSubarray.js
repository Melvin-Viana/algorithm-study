/**
 *
https://leetcode.com/problems/maximum-product-subarray/


Dynamic programming.

To do one pass:
  - Create contiguous subarray products for each index
  - Intialize variable for lowest product
  - Initialize variable for highest product

  - On each index
  */

const maxProduct = nums => {
  let highestPos = nums[0];
  let lowestNeg = nums[0];
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let neg = lowestNeg;
    let pos = highestPos;
    lowestNeg = Math.min(nums[i], lowestNeg * nums[i], highestPos * nums[i]);
    highestPos = Math.max(nums[i], lowestNeg * nums[i], highestPos * nums[i]);
    ans = Math.max(nums[i], highestPos)
  }
  return ans;
};