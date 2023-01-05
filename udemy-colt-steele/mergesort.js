const merge = (left, right) => {
  if(left.length === 0) return [left, ...mergeSort(right)];
  if(right.length === 0) return [right, ...mergeSort(left)];

  if(left[0] > right[0]) {
    return [...mergeSort(right), ...mergeSort(left)]
  } else {
    return [...mergeSort(left), ...mergeSort(right)]
  }
}
const mergeIteratively = (arr) => {
  if(arr.length <= 1) return arr;
  const merge = (left, right) => {
    const res = [];
    while(left.length && right.length) {
      if(left[0] < right[0]) res.push(left.shift())
      else res.push(right.shift())
    }
    while(left.length) res.push(left.shift())
    while(right.length) res.push(right.shift())
    return res;
  }
  const mid = Math.floor(arr.length/2);
  const left = mergeIteratively(arr.slice(0, mid))
  const right = mergeIteratively(arr.slice(mid));

  return merge(left, right);
}
const mergeSort = (arr) => {
  //Split array into two;
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(left, right);
}

console.log(mergeSort([8,3,5,4,7,6,1,2]))
console.log(mergeIteratively([8,3,5,4,7,6,1,2]))