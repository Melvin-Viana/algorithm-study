def iterateFactorial(n):
  fact = 1
  for i in range(2, n + 1):
    fact *= i

  return fact

dp = {}
def recursiveFactorial(n):
  if n <= 2:
    return 1
  dp[n] = recursiveFactorial(n-1)
  return dp[n] * n