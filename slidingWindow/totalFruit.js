var totalFruit = function(fruits) {
  const n = fruits.length;

  if( n <= 2) return n;
  const indices = new Map();
  indices.set(fruits[0], 0)
  indices.set(fruits[1], 1);
  let curr = 2;
  let max = 2;
  for (let i = 2; i < n; i++) {
    if(indices.size === 2 && !indices.has(fruits[i])) {

      for (let [fruit, j] of indices){
        if(fruits[i-1] === fruit) continue
        indices.delete(fruit);
        curr = i - j;
        break;
      }
    } else {
      curr++
    }
    if(curr > max) max = curr;
    indices.set(fruits[i], i);
  }
  return max;
};