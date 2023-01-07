const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
const pivot = (arr, start = 0, end = arr.length - 1) => {
  // Designate a pivot element
  let pivot = arr[start];
  let pivotIndex = start;
  //Store the current pivot index in a variable

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  //Swap the startin element with the pivot, with pivot index
  swap(arr, start, pivotIndex);
  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return arr; 
  let pivotIndex = pivot(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
};

const quickSortNoHelper = (arr, left=0, right=arr.length-1) => {
  if (left >= right) return 
  let pivot = arr[left];
  let pivotIndex = left;
  for (let i = left + 1; i <= right; i++){
    if(pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, left, pivotIndex);
  quickSortNoHelper(arr, 0, pivotIndex-1)
  quickSortNoHelper(arr, pivotIndex+1, right);
  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
console.log(quickSortNoHelper([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));