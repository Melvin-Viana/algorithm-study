/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if (nums.length < 3) return []
nums.sort((a, b) => a - b)
  const ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
      if(nums[i] > 0) break;
      if (nums[i] === nums[i - 1]) continue
      let low = i + 1;
      let high = nums.length -1 ;
      while (low < high) {
          let sum = nums[i] + nums[low] + nums[high];
          if(sum === 0) {
              ans.push([nums[i],nums[low],nums[high]]);
              while(nums[low] === nums[low+1]) low++;
              while(nums[high] === nums[high-1]) high--;
              low++;
              high--;
          } else if(sum < 0) {
              low++;
          } else {
              high--;
          }
      }

  }
  return ans;
};