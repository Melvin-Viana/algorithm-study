const getGcd = (x, y) => {
  if(x%y === 0) return y;
  return getGcd(y, x%y);
}
const lcm = (a, b) => (a / gcd(a, b)) * b;
const subarrayLCM = (nums, k) => {

  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let subarray_lcm = nums[i];
    for (let j = i; j < n; j++) {
      subarray_lcm = lcm(subarray_lcm, nums[j]);
      if (subarray_lcm === k) dp[i]++;
      if (subarray_lcm > k) break;
    }
  }
  return res
}
