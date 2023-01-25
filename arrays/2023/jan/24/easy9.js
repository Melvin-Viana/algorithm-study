const countElements = (nums) => {

  nums.sort((a,b) => a-b)
  let count = 0;
  let start = 1;
  while( start < nums.length && nums[start-1] === nums[start]) start++;
  let end = nums.length -2;
  while(start <= end && nums[end+1] === nums[end] ) end--;
  for (let i = start; i <= end; i++) {
    count++;
}
  return count;
}