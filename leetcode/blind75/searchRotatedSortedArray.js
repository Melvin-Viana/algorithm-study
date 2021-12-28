//https://leetcode.com/problems/search-in-rotated-sorted-array/


// Distinct values
// Sorted array that may be rotated a indefinite amount of times
const search = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if(nums[mid] === target) return mid;
    if (nums[left] < nums[mid]) {
      if(nums[left] <= target && target <= nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if(nums[mid] <= target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  // Return -1 if target doesnt exist
  return -1;
}