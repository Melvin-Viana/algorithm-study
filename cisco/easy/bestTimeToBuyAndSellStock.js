const maxProfit = prices => {
  let max = -Infinity;
  let min = Infinity;
  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(price-min, max);
  }
  return max;
}