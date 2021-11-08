/**
 * https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


const searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if(nums[middle] === target) return middle;
      if(nums[middle] > target) right = middle;
      else left = middle + 1;
  }
  if(target > nums[right]) return right + 1;
  return left;
};