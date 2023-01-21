const containsDuplicate = (nums) => {
  const seen =  new Set();
  for (let num of nums) {
    if(seen.has(num)) return true;
    seen.add(num)
  }
  return false;
}

console.assert(containsDuplicate([1,2,3,1]));
console.assert(containsDuplicate([1,2,3,4]) === false, 'returns false no dupe') ;
console.assert(containsDuplicate([1,1,1,1,3,3]), 'returns true') ;
console.assert(containsDuplicate([4,1,2,5,3,4]), 'returns true') ;