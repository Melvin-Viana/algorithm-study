/**
 *
 * https://leetcode.com/problems/sqrtx/submissions/
 */
const squareRoot = (x) => {
  let left = 1
  let right = Math.ceil(x/2);
  let ans = 0;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(mid * mid === x)return mid;
      if(mid * mid < x) {
          ans = mid
          left = mid + 1;
      } else {
          right = mid-1;
      }
  }
  return ans;
}