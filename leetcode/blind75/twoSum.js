  // Constraints:  Input has at least 2 elements. Input has exactly one solution

const twoSum = (nums, target) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(diff in seen) return [seen[diff], i];
    seen[nums[i]] = i;
  }
};

module.exports = twoSum;