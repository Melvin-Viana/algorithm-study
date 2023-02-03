const frequencySort = (arr) => {
  const count = new Map();
  for (let num of arr) {
    if(!count.has(num)) count.set(num, 0)
    count.set(num, count.get(num) + 1);
  }

  return arr.sort((a,b) => {
    if(count.get(a) === count.get(b)) return b - a;
    return count.get(a)-count.get(b)
  });
};