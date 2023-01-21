const productExceptSelf = (nums) => {
  const output = [1];
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    output[i] = output[i-1] * nums[i-1];
  }
  let right =1;
  for(let i = n-1; i >=0; i--) {
    output[i] *= right;
    right *= nums[i];
  }
  return output;
}