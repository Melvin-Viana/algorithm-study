const containDupe = (nums) => {
  const map = new Map()
  for (let num of nums) {
    if(map.has(num)) return true;
    map.set(num)
  }
  return false;
}