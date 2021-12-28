var maxProfit = function(prices) {
  // Buy the smallest number and sell at the highest profit
  let buy = prices[0];
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
      ans = Math.max(ans, prices[i] - buy);
      buy = Math.min(buy, prices[i]);
  }
  return ans;
};