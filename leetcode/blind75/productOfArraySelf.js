/**
 *
 * https://leetcode.com/problems/product-of-array-except-self/

  1. Create prefixes and suffixes of the products

  - For each index get the product of everything to the left of it, if nothing it's 1.
      - Multiply all products for the element before it


  - For each index get the product of everything to the right of it.
      - Multiply all products for the element after it

  Multiply the products together for each index, return that output.

  */

const productExceptSelf = (nums) => {
  const length = nums.length;
  const ans = [1];
  for(let i =1; i < length; i++) {
    ans[i] = ans[i-1]*nums[i-1];
  }
  let prev = 1;
  for (let i = length - 2; i >= 0; i--) {
    prev *= nums[i+1]
    ans[i] = ans[i] * prev
  }
  return ans;
};