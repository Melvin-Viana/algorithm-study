//Are there any time and space constraints i need to consider when solving this problem:

// Will our input inlcude non negative numbers?


// Two solutions:
// Squaring all numbers than sorting
// Creating an empty array and using two pointers to input the squared numbers onto the end of the array.

const sortedSquares = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let pointer = nums.length - 1;
  const ans = new Array(nums.length);
  while (l <= r) {
    if(Math.abs(nums[l]) > Math.abs(nums[r])) {
      ans[pointer] = nums[l] ** 2;
      l++;
    } else {
      ans[pointer] = nums[r] ** 2;
      r--;
    }
    pointer--;
  }
  return ans;
};









