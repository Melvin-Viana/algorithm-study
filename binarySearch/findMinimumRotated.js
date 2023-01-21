const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    //Check Right
    let leftNum = arr[l];
    let midNum = arr[mid];
    let leftOfMid = arr[mid-1];
    let rightOfMid = arr[mid+1];
    if (midNum > rightOfMid) return rightOfMid;
    if (midNum < leftOfMid) return midNum;
    if (midNum > leftNum) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

console.assert(findMinRotated([30,40,50,10,20]) === 3, 'test 1 fail')
console.assert(findMinRotated([1,2,30,40,50]) === 0, '0 fail')