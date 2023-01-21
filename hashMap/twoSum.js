const twoSum = (nums, target) => {
  const seen = new Map();
  for (let [i,num] of nums.entries()) {
    let diff = target - num;
    if(seen.has(diff)) return [seen.get(diff), i];
    seen.set(num, i);
  }
}

console.assert(twoSum([2,7,11,15] , 9).toString() === '0,1' )
console.assert(twoSum([2,7,11,15] , 26) .toString() === '2,3')
console.assert(twoSum([2,2,11,15] , 4) .toString() === '0,1')