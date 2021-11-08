/**
 *
 * https://leetcode.com/problems/binary-search/
 * @param {*} nums - Array of numbers sorted in ascending order
 * @param {*} target  - Number to find
 * @return - Return index of number; -1 if it doesnt exist
 *
 */

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left+right) / 2);

    if(nums[middle] === target) return middle;

    if(nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};


console.log(binarySearch([-1,0,3,5,9,12], 9))
console.log(binarySearch([-1,0,3,5,9,12], 12))
console.log(binarySearch([-1,0,3,5,9,12], -1))
console.log(binarySearch([-1,0,3,5,9,12], 22))