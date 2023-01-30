const twoSum = (nums, target) => {

  const map = new Map();
  let i = 0;
  for (let num of nums) {
    if(map.has(num)) return [map.get(num), i];
    map.set(num, i);
    i++;
  }
}