/**
 * Given a sorted array of integers and a target integer, 
 * find the first occurrence of the target and return its index. Return -1 if the target is not in the array.
 */
const findFirstOccurrence = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let ans = -1;
  while (l <= r) {
    mid = Math.floor((l + r)/ 2);
    //Check Left - not in right (curr mid is larger or equal to target)
    if(arr[mid] >= target) {
        r = mid - 1;
        if(arr[mid] === target) ans = mid; //Reassign ans when target is equal to current mid
    } else {
        l = mid + 1;
    }
  }
  return ans;
}

console.log(findFirstOccurrence([1,3,3,3,3,6,10,10,10,100],3))