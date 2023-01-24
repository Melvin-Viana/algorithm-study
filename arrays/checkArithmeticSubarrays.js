const checkArithmeticSubarrays = (nums, l, r) => {
  const res = [];
  const isSeq = arr => {
    if(arr.length <= 1) return true;
    arr.sort((a,b)=>a-b);
    const diff = arr[1] - arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
      if(diff !== arr[i+1] - arr[i]) return false;
    }
    return true;
   }

   for (let i = 0; i < l.length; i++) {
    res[i] = isSeq(nums.slice(l[i], r[i] + 1));
   }
   return res;
}