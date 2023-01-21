const findSubsequences = function(nums) {
  const ans = []
  const visited = new Set();
  let n = nums.length;
  const dfs = (i, set) => {
      if(visited.has(set.toString())) return;
      visited.add(set.toString())

      if (set.length >= 2)ans.push(set);
      for (let j = i +1; j <n; j++) {
          if(nums[j] < nums[i]) continue;
          dfs(j, [...set, nums[j]])
      }
  }
  for (let i = 0; i < nums.length; i++) {
      dfs(i, [nums[i]]);
  }
  return ans;
};