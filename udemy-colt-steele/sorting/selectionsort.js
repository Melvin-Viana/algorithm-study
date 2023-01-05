const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = (arr) => {
  for(let i=0; i < arr.length-1; i++) {
    let min =i;
    for (let j =i+1; j < arr.length; j++) {
      if(arr[j]<arr[min]) {
        min = j;
      }
    }

    if(i!==min)swap(arr, min, i);
  }
  return arr;
}
console.log(selectionSort([8,1,2,3,4,5,6,7]));