const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    if (mid > 0 && arr[mid] < arr[mid - 1]) return mid;
    else if (arr[left] <= arr[mid] && arr[mid] > arr[right]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.assert(findMin([30, 40, 50, 10, 20]) === 3);
console.assert(findMin([0, 1, 2, 3, 4, 5]) === 0);
console.assert(findMin([0]) === 0);
console.assert(findMin([1, 2, 3, 5, 8, 0]) === 5);
