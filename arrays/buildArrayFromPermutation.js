const buildArray = (nums) => {
  //ans[i] = nums[nums[i]]
  const ans = []
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}