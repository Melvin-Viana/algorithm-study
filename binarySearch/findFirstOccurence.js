const findFirstOccurrence = (arr, target) => {
  // WRITE YOUR BRILLIANT CODE HERE
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let ans = -1;
  while (l <= r) {
      mid = Math.floor((r - l )/2);
      // Check Left
     if(arr[mid] < [target]) {
         l = mid + 1;   
     } else {
         r = mid - 1;
         if(arr[mid] === target) ans = mid;
     }
  }
  return ans;
}

console.log(findFirstOccurrence([1,3,3,3,3,6,10,10,10,100],3))
console.log(findFirstOccurrence([1,3,3,3,3,6,10,10,10,100],3))
console.log(findFirstOccurrence([1,3,3,3,3,6,10,10,10,100],3))