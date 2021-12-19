/**
 *
 * An array of boolean values is divided into two   sections; the left section consists of all false and the right section consists of all true. Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.
 */

// If element is false, discard everything to the left and the current element
// If element is true, discard everything to the right and the current element

const findBoundary = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;
  while (left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    }
    if(!arr[mid]) left = mid + 1;

  }
  return boundaryIndex;
}