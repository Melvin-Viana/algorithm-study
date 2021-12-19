/**
 *
 * @param {*} numbers
 * @param {*} target
 * @returns
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