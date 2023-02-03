const maximumPopulation = (logs) => {
  let years = Array(100);
  let max = -1;
  for (let [start, end] of logs) {
    while(start < end) {
      max = Math.max(years[start-1950] + 1, max)
      years[(start++) - 1950]++;
    }
  }
  return max;
}