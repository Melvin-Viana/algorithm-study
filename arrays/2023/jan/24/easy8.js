const maxSubsequence = (nums, k) => {

  const copy = [...nums.entries()].sort((a,b)=>b-a)

  //Getting the count
  const map = new Map()
  for (let i = 0; i < k; i++) {
    const val = copy[i];
    map.set(val, 1 + (map.get(val) || 0));
  }
  const res = [];
  let indexRes = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if(!map.has(val)) continue;
    res[indexRes++] = val;
    if(map.get(val) === 1) map.delete(val)
    else map.set(val, map.get(val) - 1)

  }

  return res;
};