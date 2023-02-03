const sortedSquares = (nums) => {
  nums = nums.map(a=>a*a);
  const n = nums.length;
  const res = [];
  for (let i = n -1; i >= 0; i--) {
    if(nums[left] > nums[right]) res[i--] = nums[left++]
    else res[i--] = nums[right--]
  }
  return nums
}