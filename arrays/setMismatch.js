const findErrorNums = (nums) => {
  const n = nums.length;
  const count = new Array(n).fill(0);

  //Find the dupe
  for (let num of nums) {
  count[num-1]++;
  if(count[num-1] === 2) ans1 = num;
  }

  //Find the missing number
  for (let num = 0; num < n; num++) {
      if(!count[num]) return [ans1, num+1];
  }
}