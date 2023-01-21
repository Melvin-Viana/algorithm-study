const topFreqElements = (nums, k) => {
  //Buckets
  const freq = Array.from({length:nums.length}, ()=>[]);
  const count = {};
  const output = [];
  for (let num of nums) {
    if(!(num in count)) count[num] = 0;
    count[num]++;
  }

  Object.keys(count).forEach(key=> {
    const c = count[key];
    freq[c].push(key);
  });
  for (let i = nums.length - 1; i >= 0 && k !== 0; i--) {
    let bucket = freq[i];
    while(bucket.length){
      output.push(bucket.pop());
      k--;
    }
  }
  return output;
}
