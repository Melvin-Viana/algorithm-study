/**
 *
 * You are given an array that was sorted, was rotated an idefinite amount of times. Find the index of the smallest element in that rotated array.
 */


const findMinRotated = arr => {
  let left = 0;
  let right = arr.length - 1;


  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] < smallest) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}