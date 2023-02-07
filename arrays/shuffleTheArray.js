const shuffle = (nums, n) => {

  let x = 0;
  let y = n;
  let addX = true;
  const res = [];
  while (y < 2*n ) {
    if(addX) res.push(nums[x++])
    else res.push(nums[y++])
    addX = !addX
  }
  return res;
}