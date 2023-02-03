const dp = {}

const climbStairs = n => {
  if(n<=1) return 1;
  if(dp[n]) return dp[n];
  dp[n] = climbStairs(n-1) + climbStairs(n-2);
  return dp[n]
}