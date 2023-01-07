const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    let next = (left[0] < right[0] && left.shift()) || right.shift();
    res.push(next);
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  //Split array into two
  const left = mergeSort(arr.slice(0, mid)); // split arrays until 0 or 1 length
  const right = mergeSort(arr.slice(mid));
  return merge(left, right); // Merge the sorted arrays together
};
const oneLineMerge = (left, right) => [
  ...[
    new Array((left.length < right.length && left.length) || right.length),
  ].map(() =>
    left[0] < right[0] && left.length ? left.shift() : right.shift()
  ),
  ...left,
  ...right,
];
//Merge Sort - No helper function
const mergeSortNoHelper = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortNoHelper(arr.slice(0, mid));
  let right = mergeSortNoHelper(arr.slice(mid));
  const res = [];
  while (left.length && right.length) {
    let next = left[0] < right[0] ? left.shift() : right.shift();
    res.push(next);
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
};

const oneLineMergeSort = (arr) =>
  arr.length < 2
    ? arr
    : merge(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)))
      );
console.log(mergeSort([1234, 3, 5, 4, 34, 6, 1, 212323452]));
console.log(mergeSort([8, 323, 5, 4, 22, 6, 1, 2]));
console.log(mergeSortNoHelper([8, 323, 5, 4, 22, 6, 1, 2]));
console.log(oneLineMergeSort([8, 323, 5, 4, 22, 6, 1, 2]));
