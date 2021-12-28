const findMinInRotatedArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let smallest = arr[arr.length-1];
  let smallestIndex = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] <= smallest) {
      smallestIndex = mid;
      smallest = arr[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return smallest;
}

const findMin = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // If mid is bigger than the right side - smallest number will be to the right
    // Otherwise check left side
    if (arr[mid] > arr[right]) left = mid + 1;
    else right = mid;
  }
  //Return the smallest element
  return arr[left];
}