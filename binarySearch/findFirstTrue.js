const findFirstTrue = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1
  while (left <= right) {
    mid = Math.floor((right-left) / 2) + left;
    //Check left - not right (mid is true)
    if(arr[mid]) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
   return ans;
}