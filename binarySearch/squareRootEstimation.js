const squareRootEstimation = (n) => {
  let left = 0;
  let right = n;
  let mid;
  while (left <= right) {
    mid = Math.floor((left+right) / 2) ;
    //Target is lower than right
    if(Math.pow(mid, 2) <= n) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
      ans = mid;
    }
  }
  return ans; // Right is the answer?
}