const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const insertonSort = (arr) => {
  for(let i=1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i -1;
    while (j >= 0 && arr[j] > curr)  {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1]  = curr;
  }
  return arr;
}
console.log(insertonSort([8,1,2,3,4,5,6,7]));
console.log(insertonSort([2,1,8,76,4]));