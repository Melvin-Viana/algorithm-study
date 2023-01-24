const findKthPositive = (nums, k) => {
  let last = 0;

  for (let num of nums) {
      for (let i = last+1; i < num; i++) {
          k--
          if(k===0) return i;
      }
      last = num;
  }
  return nums[nums.length-1] + k;
};
console.assert(findKthPositive([2,3,4,7,11], 5) === 9);