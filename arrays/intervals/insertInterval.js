const insertInterval = (intervals, newInterval) => {
  const output = [];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    if(end < newInterval[0]) {
      output.push(intervals[i])
    } else if(start > newInterval[1]) {
      output.push(newInterval);
      newInterval = intervals[i]
    } else {
      newInterval[0] = Math.min(start, newInterval[0]);
      newInterval[1] = Math.max(end, newInterval[1])
    }
  }
  output.push(newInterval);
  return output;
};