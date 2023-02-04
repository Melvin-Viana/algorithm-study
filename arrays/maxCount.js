//Count numbers from 1 to n
// Count all non-banned numbers
// that sum up to maxSum, starting from 1
// Greedy:
const maxCount = (banned, n, maxSum) => {
  const chosen = Array(n+1).fill(false);
  for (let num of banned) chosen[num] =true;
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {

    if(!chosen[i] && sum + i <= maxSum) {
          count++
          sum+=i;
      }
      if(sum + i >= maxSum) break;
  }
  return count;
};
