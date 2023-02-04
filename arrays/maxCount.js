const maxCount = (banned, n, maxSum) => {
  const chosen =  new Array(n+1)
  chosen.fill(false);

  for (let num of banned) chosen[num] =true;
  let count = 0;
  let sum = 0;
  for (let i = 1; i < n+1; i++) {
      if(!chosen[i] && sum + i <= maxSum) {
          count++
          sum+=i;
      }
      if(sum + i >= maxSum) break;
  }
  return count;
};
