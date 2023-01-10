/**
 * Given an array of integers sorted in increasing order, find the index of the first element that is larger or equal to the target.
 */
const firstElementNotSmaller = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    //Check Left - not in right (curr mid is larger or equal to target)
    if(arr[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1; // Check right
    }
  }
  // Element will be found. Will never go out of bounds => arr.length
  return ans;
};

console.log(firstElementNotSmaller([1,3,3,5,6,8], 3))
console.log(firstElementNotSmaller([1,3,3,5,6,8], 9))