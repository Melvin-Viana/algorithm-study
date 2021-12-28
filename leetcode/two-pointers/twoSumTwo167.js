/**
   *
   * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

  Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
*/
const twoSumTwo = (numbers, target) => {
  let l = 0, r = numbers.length - 1;

  while(l<r) {
    let sum = nums[l]+nums[r]
    if(sum === target) return [l+1, r+1]
    if(sum > target) r--;
    else l++;
  }
};