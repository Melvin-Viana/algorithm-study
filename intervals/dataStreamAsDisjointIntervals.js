var SummaryRanges = function() {
  this.values = new Set();
  this.intervals = [];

};

const insert = (vals) => {
  vals = [...vals].sort((a,b) => a-b);

  const output = [];
  let start = vals[0];
  let end = vals[0];
  for (let val of vals) {
    if(val-1 === end) {
      end = val;
    }
    else if(val === end) continue;
    else {
      output.push([start, end])
      start = val;
      end = val;
    }
  }
  output.push([start, end])
  return output;
}

SummaryRanges.prototype.addNum = function(value) {
  this.values.add(value);
  this.intervals = insert(this.values);
};

/**
* @return {number[][]}
*/
SummaryRanges.prototype.getIntervals = function() {
  return this.intervals;
};
