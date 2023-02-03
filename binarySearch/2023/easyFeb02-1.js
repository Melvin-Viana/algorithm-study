/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  arr.sort((a,b)=>a-b);

  //2*left === right?
  //left element against elemnts to the right of it

  for (let i = 0; i < arr.length-1; i++) {
    let left = 0;
    let right = arr.length - 1;
    if(arr[i] === 0 && arr[i+1] !== 0) continue
    while (left <= right){
      let mid = Math.floor((left+right)/2)
      if(arr[mid] === arr[i] * 2) return true;
      if(arr[mid] < arr[i] * 2) left = mid + 1;
      else right = mid - 1;
    }
  }

  return false
};