/**
 * EFFICIENT Array search algorithm - Narrowing the search range by half each time
 *
 * ARRAY IS SORTED in this algorithm
 * Time Complexity - O (log(n))
 *    We always pick the middle element in current search
 *    range and shrinking the range by half each time.
 */

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }
};

const binaryRecursive = (arr, target, l = 0, r = arr.length - 1) => {
  if (l > r) return -1;
  let mid = Math.floor((r - l) / 2) + l;
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binaryRecursive(arr, target, mid + 1, r);
  return binaryRecursive(arr, target, l, mid - 1);
};
