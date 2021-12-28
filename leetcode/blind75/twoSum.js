const twoSum = (nums, target) => {
  const seen = {};
  for (let i in nums) {
    let diff = target - nums[i];
    if(diff in seen) return [seen[diff], i];
    seen[nums[i]] = i;
  }
};