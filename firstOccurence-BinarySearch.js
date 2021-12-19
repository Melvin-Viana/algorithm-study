/**
 * Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.
 */

const firstOccurence = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let output = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      output = mid;
      right = mid - 1;
    }
    else if(nums[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return output;
}
console.log(firstOccurence([2, 3, 5, 7, 11, 13, 17, 19], 6))
console.log(firstOccurence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3))