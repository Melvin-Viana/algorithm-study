const findFirstTrue = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((right-left) / 2) + left;
    if((mid === 0 || mid === arr.length - 1) && arr[mid]) return mid;
    let next = arr[mid+1]
    let prev = arr[mid-1]
    //1 False 2 True is target
    if(!prev && arr[mid] && next) return mid;
    else if(arr[mid]) right = mid - 1;
    else left = mid + 1;
    // 1/3 Trues Check Left
    // 2/3 Falses Check Right
   
  }
}