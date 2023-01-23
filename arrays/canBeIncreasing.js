const canBeIncreasing = nums=> {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i-1] >= nums[i]) {
      count++;
      if(i>1 && nums[i-2] >= nums[i]) nums[i] = nums[i-1];
    }
    if(count >=2 )return false;
  }
  return count < 2:
}


console.assert(canBeIncreasing([1,1,1]) === false, 'falsy')
console.assert(canBeIncreasing([2,3,1,2]) === false, 'falsy')
console.assert(canBeIncreasing([1,2,10,5,7]), 'truth')